let ask = (question, yes, no) => {
    if ( confirm(question) ) {
        yes();
    } else {
        no();
    }
}

ask("Вы согласны?", () => alert("Вы согласны"), () => alert("Вы не согласны"));