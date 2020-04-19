import React from 'react'
import classnames from "classnames";
import ScrollIntoView from 'react-scroll-into-view'


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }
    handleScroll = () => {
        const { prevScrollpos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };
   
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <div
                className={classnames("nav-bar", {
                    "navbar--hidden": !this.state.visible
                })}>
                <div id='nav-name'>Luke Matthews</div>
                <div id ='nav-name-collapsed'>Luke</div>
                <ScrollIntoView selector='#landing-page'>
                    <div id='home-butt'>Home</div>
                </ScrollIntoView>
                <ScrollIntoView selector='#portfolio-page'>
                    <div id='portfolio-butt'>Portfolio</div>
                </ScrollIntoView>
                <ScrollIntoView selector='#about-page'>
                    <div id='about-butt'>About</div>
                </ScrollIntoView>
            </ div>
        )
    }
}
export default Header