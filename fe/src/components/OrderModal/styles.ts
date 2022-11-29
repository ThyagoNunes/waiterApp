import styled from 'styled-components';

export const Overlay = styled.div`
    left: 0rem;
    top: 0rem;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(0.25rem);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    background: #fff;
    width: 30rem;
    padding: 2rem;
    border-radius: 1rem;

    > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 1.5rem;
    }

    button {
        /* display: flex; */
        line-height: 0;
        border: 0;
        background: transparent;
    }
}

    .status-container {
        margin-top: 2rem;

        small {
             font-size: 2rem;
             opacity: 0.8;
        }

        div {
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
`;

export const OrderDetails = styled.div `
    margin-top: 2rem;

    > strong {
        font-weight: 500;
        font-size: 1rem;
        opacity: 0.8;
    }

    .order-items {
        margin-top: 1rem;

        .item {
            display: flex;

            & + .item {
                margin-top: 1rem;
            }

            img {
                border-radius: 0.38rem;
            }

            .quantity {
                font-size: 1rem;
                color: #666;
                display: block;
                min-width: 1.1rem;
                margin-left: 0.8rem;
            }

            .product-details {
                margin-left: 0.25rem;

                strong{
                    display: block;
                    margin-bottom: 0.25rem;
                }

                span {
                    font-size: 1rem;
                    color: #666;
                }
            }
        }
    }

    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;

        span {
            font-weight: 500;
            font-size: 1rem;
            opacity: 0.8;
        }
    }
`;

export const Actions = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .primary {
        background: #333;
        border-radius: 3rem;
        border: 0;
        color: #fff;
        padding: 0.8rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
    }

    .secondary {
        padding: 0.8rem 1.5rem;
        color: #d73035;
        font-weight: bold;
        border: 0;
        background: transparent;
        margin-top: 0.75rem;
    }
`;
