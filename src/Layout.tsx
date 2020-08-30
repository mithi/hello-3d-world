/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { FunctionComponent } from "react"

type propType = { left: JSX.Element; right: JSX.Element }

const TwoColumnRow = ({ left, right }: propType) => {
    return (
        <div className="flex">
            <div className="w-1/2">{left}</div>
            <div className="w-1/2">{right}</div>
        </div>
    )
}

class Layout extends React.Component {
    static Side: FunctionComponent = ({ children }) => (
        <div className="w-full md:w-1/2 lg:w-1/3">
            <div
                css={css`
                    border-width: 1px;
                    border-color: #673ab7;
                    margin: 10px;
                    background-color: #17212b;
                    padding: 10px;
                    border-radius: 20px;
                `}
            >
                {children}
            </div>
        </div>
    )
    static Main: FunctionComponent = ({ children }) => (
        <div
            css={css`
                height: 100vh;
            `}
            className="w-full md:w-1/2 lg:w-2/3"
        >
            {children}
        </div>
    )

    render = () => (
        <div
            css={css`
                background-color: #17212b;
                padding: 5px;
                font-size: 10px;
                font-family: Montserrat, monaco, monospace;
                color: #e91e63;
                a {
                    padding: 15px;
                    text-decoration: underline;
                }
                a: hover {
                    color: #673ab7;
                }
            `}
            className="sm:flex"
        >
            {this.props.children}
        </div>
    )
}

export { Layout, TwoColumnRow }
