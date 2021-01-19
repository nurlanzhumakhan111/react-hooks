import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export default function Search() {
    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)
    const onSubmit = (e) => {
        if(e.key !== 'Enter') return
        github.clearUsers()
        if(value.trim()){
            hide()
            github.search(value.trim());
        }else{
            show('Введите данные пользователя')
        }
    }
    return (
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyPress={onSubmit}
            />
            
        </div>
    )
}
