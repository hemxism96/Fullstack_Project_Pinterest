import React from 'react';
import styled from "styled-components"
import '../css/pin_styles.css';


function Pin2(props) {

    let {urls} = props;
    return (
        <form action="/api/like_photos" method='POST'>
            <Wrapper>
                <Container>
                    <button className="save_card" onclick="button_click();">SAVE</button>
                    <img src={urls?.regular} alt="pin" />
                    <script>
                        function button_click(s) {
                            <input name="url" type="text" value={urls?.regular} />
                        }
                        <input type="submit"/>
                    </script>
                </Container>
            </Wrapper>
        </form>
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
