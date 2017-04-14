import * as React from 'react';

function renderedAt(): React.ReactElement<any> {
    return <div>rendered at {Date.now()}</div>;
}
    

export function StatelessFunctionalComponent(props: Variations.Props, state: never) {
    return renderedAt();
}

export class Component extends React.Component<Variations.Props, never> {
    render() {
        return renderedAt();
    }
}

export class Pure extends React.PureComponent<Variations.Props, never> {
    render() {
        return renderedAt();
    }
}

export namespace Variations {
    export interface Props {
        title: string
    }
}