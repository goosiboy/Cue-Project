import { Component } from "react";
import "./Form.css";

interface IFormProps {
    formLabel: string,
    parentCallback: any
}

interface IFormState {
    formValue: string
}

export default class Form extends Component<IFormProps, IFormState> {

    constructor(props: any) {
        super(props);

        this.state = {
            formValue: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(event: any) {
        this.setState({ formValue: event.target.value });
    }

    private handleSubmit(event: any) {
        event.preventDefault();
        this.props.parentCallback(this.state.formValue);
    }

    render() {
        return (
            <div className="formContainer">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        {this.props.formLabel}:
                        <br />
                        <input type="text" value={this.state.formValue} onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }

}