import React from 'react';
import MDEditor from '@uiw/react-md-editor';

// create an markdown editor that will allow the user to create instructions for a recipe
// the user will be able to enter instructions in markdown format
// the user will be able to preview the instructions in markdown format

class CreateInstructions extends React.Component {
    render() {
        return (
            <div className="createInstructions">
                <h1>Instructions</h1>
                <div className="instructionsForm">
                    <MDEditor name="instructions" value={this.props.instructions} onChange={this.props.handleInstructionChange} />
                </div>
            </div>
        );
    }

}

export default CreateInstructions;