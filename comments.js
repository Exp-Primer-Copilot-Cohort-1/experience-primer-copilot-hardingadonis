// create web server with express

const express = require('express');

const router = express.Router();

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: 3,
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: 4,
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// GET /comments - list all comments
router.get('/', (req, res) => {
    res.json(comments);
})

// POST /comments - create a new comment
router.post('/', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.json(comments);
})

// GET /comments/:id - get one comment by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === Number(id));
    res.json(comment);
})

// PATCH /comments/:id - update one comment
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === Number(id));
    foundComment.comment = newCommentText;
    res.json(foundComment);
})

// DELETE /comments/:id - delete one comment
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === Number(id));
    comments = comments.filter(c => c.id !== Number(id));
    res.json(foundComment);
})

module.exports = router;