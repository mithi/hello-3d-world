/** @jsx jsx */
import { css, jsx } from "@emotion/core"

function App() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={require("./profile.jpg")} alt="Display" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Bare Minimum 3d Documentation
                </div>
                <p className="text-gray-700 text-base">
                    This is an interactive tutorial showcasing how to use the
                    <code className="bg-red-200 rounded-full px-3 py-1">
                        bare-mininmum-3d
                    </code>
                    package.
                </p>
            </div>

            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #d3
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #data-visualization
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #plot
                </span>
            </div>
            <div
                css={css`
                    padding: 32px;
                    background-color: red;
                    font-size: 24px;
                    border-radius: 4px;
                    &:hover {
                        color: blue;
                    }
                `}
            >
                Hover to change color.
            </div>
        </div>
    )
}

export default App
