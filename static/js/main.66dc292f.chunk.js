(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(3),l=a(5),i=a(4),r=a(6),c=a(1),s=a(0),u=a.n(s),h=a(8),m=a.n(h),d=(a(14),u.a.Component,function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={isVisible:!0,formValidated:!1},a.handleFormClick=a.handleFormClick.bind(Object(c.a)(Object(c.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"handleFormClick",value:function(){console.log("something was clicked"),console.log(this.state.isVisible),this.setState={isVisible:!0}}},{key:"render",value:function(){return!0===this.state.isVisible?u.a.createElement("form",{id:"addBookForm",visibility:"visible",completed:"false"},u.a.createElement("h1",null,"Want to Add a New Book?"),u.a.createElement("h2",null,"Sorry, new book addition is not available for now."),u.a.createElement("h2",null,"This is a front-end only webpage for now."),u.a.createElement("p",null,u.a.createElement("label",{htmlFor:"title"}," What is the title of the book?"),u.a.createElement("input",{id:"title",name:"booktitle",required:!0})),u.a.createElement("p",null,u.a.createElement("label",{htmlFor:"author"}," Who is the author of the book?"),u.a.createElement("input",{id:"authorname",name:"authorname",required:!0})),u.a.createElement("p",null,u.a.createElement("label",{htmlFor:"pages"}," How many pages does the book have?"),u.a.createElement("input",{id:"pages",name:"pages",required:!0})),u.a.createElement("p",null,u.a.createElement("label",{htmlFor:"genre"},"What genre is the book?"),u.a.createElement("input",{id:"genre",name:"genre",required:!0})),u.a.createElement("p",null,"Have you finished this book?",u.a.createElement("label",{htmlFor:"haveRead"}," Yes"),u.a.createElement("input",{type:"radio",name:"haveRead",value:"true"}),u.a.createElement("label",{htmlFor:"haventRead"},"Nope"),u.a.createElement("input",{id:"haveRead",type:"radio",name:"haveRead",value:"false"})),u.a.createElement("button",{onClick:this.props.handleSubmit},"Submit (disabled) ")):(console.log("This is the current state "+this.state.isVisible),u.a.createElement("div",null,u.a.createElement("button",{id:"addBookForm",onClick:this.handleFormClick},"Add a New Book~~!")))}}]),t}(u.a.Component)),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={isReadorNot:a.props.thisBook.isRead},a.handleClick=a.handleClick.bind(Object(c.a)(Object(c.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){var e=!0!==this.state.isReadorNot;this.setState({isReadorNot:e})}},{key:"render",value:function(){var e;return e=!0===this.state.isReadorNot?"Finished!":"Working on It",u.a.createElement("h3",null,"Have you finished the book?",u.a.createElement("button",{onClick:this.handleClick},e))}}]),t}(u.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("button",{title:this.props.title,onClick:this.props.onClick},"Remove this Book from Library")}}]),t}(u.a.Component),f=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.aBook,t=e.title,a=e.author,n=e.numPages,o=e.genre;return u.a.createElement("div",{className:"bookContainer"},u.a.createElement("h1",null,"Title: ",t),u.a.createElement("h2",null,"Author: ",a),u.a.createElement("h2",null,"Pages: ",n),u.a.createElement("h2",null,"Genre: ",o),u.a.createElement(b,{thisBook:e}),u.a.createElement("br",null),u.a.createElement(k,{title:t,onClick:this.props.onClick}))}}]),t}(u.a.Component),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={allBooks:[{title:"Lord of the Rings: Fellowship of the Ring",author:"JRR Tolkien ",numPages:"1235",isRead:!0,genre:"Fantasy"},{title:"Lord of the Rings: The Two Towers",author:"JRR Tolkien ",numPages:"1235",isRead:!1,genre:"Fantasy"},{title:"Lord of the Rings: Return of the King",author:"JRR Tolkien ",numPages:"1235",isRead:!1,genre:"Fantasy"},{title:"Game of Thrones",author:"George R R Martin ",numPages:"1235",isRead:!0,genre:"Fantasy"},{title:"Cell ",author:"Stephen King ",numPages:"1235",isRead:!1,genre:"horror"},{title:"Design It Yourself",author:"Ellen Lipton",numPages:"1235",isRead:!1,genre:"DIY"},{title:"Fullmetal Alchemist",author:"Hiromu Arakawa",numPages:"1235",isRead:!1,genre:"manga"}]},a.handleRemoveClick=a.handleRemoveClick.bind(Object(c.a)(Object(c.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"handleRemoveClick",value:function(e){var t=e.currentTarget.title;console.log("this is the book to remove"+t);var a=this.state.allBooks,n=a.findIndex(function(e){return e.title===t});a.splice(n,1),this.setState({allBooks:a})}},{key:"render",value:function(){var e=this,t=[];return this.state.allBooks.forEach(function(a){t.push(u.a.createElement(f,{aBook:a,title:a.title,key:a.title,onClick:e.handleRemoveClick}))}),u.a.createElement("div",{id:"librarycontainer2"},t)}}]),t}(u.a.Component),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={dummystate:"blank",newBook:{title:"Your new book will go here",key:"placeholder"},formValidated:"false"},a.handleFormSubmit=a.handleFormSubmit.bind(Object(c.a)(Object(c.a)(a))),a}return Object(r.a)(t,e),Object(o.a)(t,[{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=document.querySelectorAll("input[required]"),a=!0,n=!1;if(t.forEach(function(e,t){null!==e.value&&""!=e.value||(a=!1)}),document.getElementsByName("haveRead").forEach(function(e){e.checked&&(n=!0)}),a&&n){var o=document.getElementById("title").value,l=document.getElementById("authorname").value,i=document.getElementById("pages").value,r=document.getElementById("genre").value,c=document.querySelector('input[name="haveRead"]:checked').value;console.log(o);var s={title:o,author:l,numPages:i,genre:r,isRead:c};console.log(this.state.formValidated),this.setState=function(){console.log(this.state.formValidated)},this.setState={newBook:s},console.log(this.state.newBook);var u=c?"read":"not read";alert("Your book would have been added with \n      Title: ".concat(o,", \n      Author: ").concat(l,", \n      Pages: ").concat(i,", \n      Genre: ").concat(r," \n      and marked as ").concat(u," "))}else alert("Please fill out all fields")}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d,{handleSubmit:this.handleFormSubmit}),u.a.createElement(p,{books:this.props.booksList}))}}]),t}(u.a.Component);m.a.render(u.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.66dc292f.chunk.js.map