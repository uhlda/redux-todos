import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
    text: string;
    completed: boolean;
    index: number;
    // tslint:disable-next-line:no-any
    onClick: any;
}

class Todo extends React.Component<Props, {}> {
    render() {
        return(
            <li  
                onClick={this.props.onClick} 
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}                
            >
                {this.props.text}
            </li>
        );
    }   
}

export default Todo;