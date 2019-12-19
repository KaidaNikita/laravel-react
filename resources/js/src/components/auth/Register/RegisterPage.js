import React, { Component } from 'react'
import TextFieldGroup from '../../common/TextFieldGroup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export class RegisterPage extends Component {

    state = {
        email: '',
        password: '',
        selectedFile: null,
        passwordConfirm: '',
        phone:'',
        imagePreviewUrl:null,
        errors: {
            //email: 'Поле є пустим'
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
        console.log('--register submit--');
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
    handleClick = (e) => {
          console.log("Target", e); 
      }
    render() {
        const { email, password,pictures, passwordConfirm, errors } = this.state;

        return (
            
            <>
                <script src="build/index.js"></script> 
                <h1 className="d-flex justify-content-center">Реєстрація на сайті</h1>

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
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                    <PhoneInput
                     className="form-group"
                     country={'ua'}
                     value={this.state.phone}
                     onChange={phone => this.setState({ phone })}
                    /> 
                    <input type="file" name="avatar" onChange={this.handleClick} />
                    {/* <img className="form-group" src={pictures[0].name} /> */}

                    <div className="form-group">
                        <button className="btn btn-primary">Зареєструватися</button>

                    </div>
                </form>
            </>
        )
    }
}

export default RegisterPage

