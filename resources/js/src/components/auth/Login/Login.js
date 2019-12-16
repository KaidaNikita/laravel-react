import React, { Component } from 'react'
import TextFieldGroup from '../../common/TextFieldGroup';

export class Login extends Component {

    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {
            email:'',
            password:''
        }
    }

    setStateByErrors = (name, value) => {
        const { errors } = this.state;
        if (!!errors[name]) {
            let new_errors = Object.assign({}, errors);
            delete new_errors[name];
            this.setState({
                [name]: value,
                errors: new_errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log('--register submit--');
        const { email,password } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";
        if (password === "") errors.password = "Поле не може бути пустим!";

        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            console.log('Model is Valid')
            //ajax axios post
        }
        else {
            this.setState({ errors });
        }
    }

    render() {
        const { email, password, passwordConfirm, errors } = this.state;
        return (
            <>
                <h1 className="d-flex justify-content-center">Логін</h1>

                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        error={errors.email}
                        onChange={this.handleChange}
                    />
                     <TextFieldGroup
                        field="password"
                        type="password"
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                    <div className="form-group">
                        <button className="btn btn-primary">Увійти</button>

                    </div>
                </form>
            </>
        )
    }
}

export default Login

