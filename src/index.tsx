import * as React from 'react';
import { default as TypeItCore } from 'typeit';
const { useRef, useEffect } = React;

export interface TypeItProps {
    element?: string, 
    options?: object,
    children?: React.ReactNode
}

const defaultProps: TypeItProps = {
    element: 'span',
    options: {}
}

const TypeIt: React.FunctionComponent = (props: TypeItProps) => {
    const ref = useRef<HTMLElement>(null);
    const {options, element, children, ...remainingProps} = props;
    const DynamicElement = element;

    useEffect(() => {
        const instance = (new TypeItCore(ref.current, {
            ...options
        })).go();

        return () => {
            instance.destroy();
        }
    }, []);

    return (
        <DynamicElement ref={ref} {...remainingProps}>
            {children}
        </DynamicElement>
    )
}

TypeIt.defaultProps = defaultProps;

export default TypeIt;
