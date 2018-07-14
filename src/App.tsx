import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

const AppWrapper = styled.div`
    background-color: green;
`;

interface IProps {
    className?: string;
}

export const App: React.SFC<IProps> = props => {

    return (
        <AppWrapper>
            example
        </AppWrapper>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
