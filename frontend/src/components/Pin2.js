import React from 'react';
import styled from "styled-components"
import '../css/pin_styles.css';

function Pin2(props) {

    let {urls} = props;
    return (
        <Wrapper>
            <Container>
                <div className="save_card">Save</div>
                <img src={urls?.regular} alt="pin" />
            </Container>
        </Wrapper>
    )
}

export default Pin2;

const Wrapper = styled.div`
    display: flex;
    padding: 8px;

`

const Container = styled.div`
    display:flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    position: relative;

    img {
        display: flex;
        width: 100%;
        cursor: zoom-in;
        border-radius: 16px;
        object-fit: cover;
    }
`
