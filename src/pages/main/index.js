import React, {Component} from 'react';
import "./style.css";
import Header from "../../components/Header"
import MainPresentation from "../../components/MainPresentation"
import { Container } from '@material-ui/core';

export default class Main extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <MainPresentation></MainPresentation>
            </div>
        );
    }
}