import React from "react";

class AlertButton extends React.Component<{ message: any, children: any }> {
    render() {
        let {message, children} = this.props;
        return (
            <button onClick={() => alert(message)}>
                {children}
            </button>
        );
    }
}

class Button extends React.Component<{ onClick: any, children: any }> {
    render() {
        let {onClick, children} = this.props;
        return (
            <button onClick={onClick}>
                {children}
            </button>
        );
    }
}

class PlayButton extends React.Component<{ movieName: string }> {
    render() {
        let {movieName} = this.props;

        function handlePlayClick() {
            alert(`Playing ${movieName}!`);
        }

        return (
            <Button onClick={handlePlayClick}>
                Play "{movieName}"
            </Button>
        );
    }
}


export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing!" >
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
            <PlayButton movieName='Hatty Potter' />
        </div>
    );
}