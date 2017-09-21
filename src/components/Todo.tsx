import * as React from 'react';
import * as PropTypes from 'prop-types';

interface Props {
    text: string;
    completed: boolean;
    index: number;
    onClick: {};
}

export class Todo extends React.Component<Props, {}> {
    render() {
        return(
            <div className="blob">blob</div> 
        )
    }   
}