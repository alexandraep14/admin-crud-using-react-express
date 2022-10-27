import logo from './logo.svg';
import './App.scss';
import {useEffect, useState} from "react";
import {useForm} from 'react-hook-form'

function App() {

    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(req => req.json())
            .then(data => setUsers(data))
    }, [])
    useEffect(() => {
        fetch("http://localhost:8080/users/1")
            .then(req => req.json())
            .then(data => setCurrentUser(data))
    }, [])


    // Noutatea: vom crea un form using React Hook
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.age = parseInt(data.age)
        fetch('http://localhost:8080/users/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(req => req.json())
            .then(data => console.log(data))
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <label htmlFor="name">name</label>
            <input type={'text'} {...register("name")} />

            <br/>
            <label htmlFor="email">email</label>
            <input type={'email'} {...register("email")} />

            <br/>
            <label htmlFor="age">age</label>
            <input type={"number"} {...register("age")} />

            <br/>
            <label htmlFor="tel">tel</label>
            <input type={"tel"} {...register("phone")} />
            {/*<select {...register("gender")}>*/}
            {/*    <option value="female">female</option>*/}
            {/*    <option value="male">male</option>*/}
            {/*    <option value="other">other</option>*/}
            {/*</select>*/}
            <input type="submit" />
        </form>
    );

    return (
        <div className="main">
            <header className="header">
                {
                    currentUser ? (
                        <div> Hello, {currentUser.name}</div>
                    ) : (
                        <div>Please sign in</div>
                    )
                }
                {/*Hello, {currentUser && currentUser.name}*/}
            </header>
            <div>
                {
                    users.map(({name, email, phone, age }, idx) => <p key={idx}>{name}: {phone}</p>)
                }
            </div>
            <form action="">

            </form>
        </div>
    );
}

export default App;
