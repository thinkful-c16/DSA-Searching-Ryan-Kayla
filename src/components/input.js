import React from 'react';

export class Input extends React.Component{
    constructor(props) {
        super(props)
    }

    handleSubmit(e){
        e.preventDefault();
        
    }

    render(){
        return (
            <form>
                <input ref={input => this.input} />
            </form>
        )
    }
}
