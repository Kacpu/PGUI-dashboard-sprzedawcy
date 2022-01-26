import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../../authorization/AuthProvider";
import styles from './loginPage.module.css'
import {t} from "i18next";

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let loginData = {
            username: formData.get("username"),
        };

        if(loginData.username !== ""){
            auth.users[0].name = loginData.username;

            auth.signIn(auth.users[0], () => {
                navigate(from, {replace: true});
            })
        }
    }

    return (
        <div className={styles.container}>
            {from !== "/" ? (
                <p>
                    {t("loginToPage")} <b>{from.substr(1)}</b>!
                </p>
            ) : (
                <p>
                    {t("toDashboard")}
                </p>
            )}
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <label className={styles.label}>
                        Username:
                    </label>
                    <input className={styles.loginInput} name="username" type="text"/>
                </div>
                <button className={styles.btn} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

