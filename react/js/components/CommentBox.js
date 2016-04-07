/// <reference path='../../../typings/tsd.d.ts' />
require.config({
    paths: {
        react: '../vendor/react',
        'react-dom': '../vendor/react-dom'
    }
})


define(["require", "exports", 'react', 'react-dom'], function (require, exports, React, ReactDOM) {
    "use strict";
    var x = 4;
    var CommentBoxStyle = {
        width: "300px",
        padding: "15px",
        border: "1px solid black",
        background: "lightblue",
        color: "red"
    };
    var CommentStyle = {
        marginBottom: "5px",
        background: "white"
    };
    var CommentList = React.createClass({
        render: function () {
            function renderComment(comment) {
                return (React.createElement("li", {key: comment.id, style: CommentStyle}, comment.id, React.createElement("span", {style: { color: "blue" }}, comment.author), comment.time, React.createElement("br", null), comment.text));
            }
            ;
            return React.createElement("ul", null, this.props.comments.map(renderComment));
        }
    });
    //
    var CommentBox = React.createClass({
        getInitialState: function () {
            return {
                comments: [
                    {
                        author: "Ned",
                        time: "2016-03-01 10:11:33",
                        text: "Good!",
                        id: 1
                    },
                    {
                        author: "Rob",
                        time: "2016-03-01 13:11:33",
                        text: "Nice!",
                        id: 2
                    }
                ],
                text: ""
            };
        },
        handleChange: function (e) {
            this.setState({
                text: e.target.value
            });
        },
        submitComment: function (e) {
            e.preventDefault();
            var updatedComments = this.state.comments.concat([{
                    author: "Jon",
                    time: "",
                    text: (this.state.text),
                    id: this.state.comments.length + 1
                }]);
            this.setState({
                comments: updatedComments,
                text: ""
            });
        },
        render: function () {
            return (React.createElement("div", {style: CommentBoxStyle}, React.createElement("h3", null, "CommentBox"), React.createElement(CommentList, {comments: this.state.comments}), React.createElement("form", {onSubmit: this.submitComment}, React.createElement("input", {value: this.state.text, onChange: this.handleChange, placeholder: "Your comment here..."}), React.createElement("button", null, "comment"))));
        }
    });
    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("CommentBox"));
});
