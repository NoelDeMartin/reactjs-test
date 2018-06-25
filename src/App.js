import React, { Component } from 'react';

type State = {
    videos: Array<Video>,
    loading: boolean
};

class App extends Component<void, State> {
    constructor(props: void) {
        super(props)

        this.state = {
            videos: [],
            loading: false
        }
    }
}