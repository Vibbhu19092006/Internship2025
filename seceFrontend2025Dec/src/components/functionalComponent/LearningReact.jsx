import UseState from "./Hooks/UseState"
import UseEffect from "./Hooks/UseEffect"
import UseEffectAPI from "./Hooks/UseEffectAPI"
import UseRef from "./Hooks/UseRef"
import UseMemo from "./Hooks/UseMemo"

const LearningReact = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <p>This page is all about learning react components. </p>
            <hr />
            <li>
                <h1>Hooks</h1>
                <ul>
                    <li><UseState /></li>
                    <li><UseEffect/></li>
                    <li><UseEffectAPI/></li>
                    <li><UseRef/></li>
                    <li><UseMemo/></li>
                </ul>

            </li>

        </div>
    )
}
export default LearningReact
