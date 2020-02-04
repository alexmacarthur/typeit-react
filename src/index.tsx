import React, {useRef, useEffect} from 'react';
import {default as TypeItCore} from 'typeit';

export interface TypeItProps {
    element?: string
}

const defaultProps: TypeItProps = {
    element: 'h1',
}

const TypeIt: React.FunctionComponent<TypeItProps> = (props) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const i = new TypeItCore(ref.current, {
            ...props
        }).go();
    }, []);

    return (
        <props.element ref={ref}>{props.children}</props.element>
    )
}

TypeIt.defaultProps = defaultProps;

export default TypeIt;
