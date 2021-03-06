import React, { Component } from 'react'
import ChaptersService from './../../../../service/chapter.service'
import BookService from './../../../../service/book.service'
import { Container, Form, Button } from 'react-bootstrap'

class ChapterForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chapter: {
                title: '',
                resume: '',
                text: '',
                book: this.props.match.params.book_id
            },
            book: []
        }
        this.chaptersService = new ChaptersService()
        this.bookService = new BookService()
    }

    componentDidMount = () => {
        this.chaptersService
            .getOneChapter(this.props.match.params.capitulo_id)
            .then(res => this.setState({ chapter: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ chapter: { ...this.state.chapter, [e.target.name]: e.target.value } })

    handleSubmit = e => {

        e.preventDefault()

        this.chaptersService
            .editChapter(this.props.match.params.capitulo_id, this.state.chapter)
            .then(() => {
                this.bookService.getBook(this.state.chapter.book._id)
                    .then(res => {
                        this.setState({ book: res.data })
                        const newChapters = [...this.state.book.chapters]
                        const anotherChapter = newChapters.filter(elm => elm._id !== this.props.match.params.capitulo_id)
                        const stateChapter = [...anotherChapter, this.state.chapter]
                        this.setState({ book: { ...this.state.book, chapters: stateChapter } })
                        this.bookService.editBook(this.state.chapter.book._id, this.state.book)
                        this.props.history.push(`/libros/${this.state.chapter.book._id}`)
                    })
            })

            .catch(err => console.log(err))

    }

    render() {

        return (
            <>
                <Container>
                    <h1> Edita tu capítulo</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" name="title" value={this.state.chapter.title} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="resume" value={this.state.chapter.resume} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="text">
                            <Form.Label>Texto</Form.Label>
                            <Form.Control as="textarea" rows={15} value={this.state.chapter.text} type="text" name="text" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button className="default-button" type="submit">Guardar capítulo</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default ChapterForm