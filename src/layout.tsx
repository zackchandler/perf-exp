import * as React from 'react';
import {Component, Pure, StatelessFunctionalComponent} from './variations';

export class Layout extends React.Component<never, Layout.State> {
    constructor() {
        super();
        this.state = {
            title: Math.random().toString()
        };
    }

    componentDidMount() {
        setInterval(() => this.setState({title: Math.random().toString()}), 1000);
    }

    render() {
        return (
            <div>
                <Component title="Component" />
                <StatelessFunctionalComponent title="Stateless Functional Component" />
                <Pure title="Pure" />
            </div>
        );
    }
}

namespace Layout {
    export interface State {
        title: string;
    }
}