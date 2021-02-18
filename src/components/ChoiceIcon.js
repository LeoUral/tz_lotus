import React from 'react';

export default class ChoiceIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconURL: '',
            tenIconsUrl: [],
            iconImage: '',
            category: ''
        }

        this.getTenUrl = this.getTenUrl.bind(this);
        this.handleClickIcon = this.handleClickIcon.bind(this);
        this.viewerIcon = this.viewerIcon.bind(this);
        this.takeCategory = this.takeCategory.bind(this);
    }

    takeCategory() {
        this.setState({
            category: this.props.category
        })

        setTimeout(() => {
            // console.log(this.state.category + ' --- in CHOCE');// test
            this.getTenUrl()
        }, 100)

    }

    async getTenUrl() {

        const category = this.state.category;
        // console.log(category + ' <<<< category choice');//test 
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer Svvh55mogtsQVuOZQvjSEd3ai428StsXZdIuoUSViQECV1qTRrEJELm86Fq3ijLU'
            },
            contentType: 'application/json'
        };

        this.response = await fetch(`https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${category}&count=10`, options);
        this.setState({
            tenIconsUrl: await this.response.json()
        })

        this.viewerIcon();
    }

    viewerIcon() {

        this.viewerIcon = [];
        const icon = this.state.tenIconsUrl.icons;

        // console.log(icon);//test
        // console.log(icon[0].raster_sizes[0].formats[0].preview_url);

        icon.forEach(data => {
            this.viewerIcon.push(
                <React.Fragment key={data.raster_sizes[0].formats[0].preview_url}>
                    <div className="icon-block"
                        onClick={this.handleClickIcon}>
                        <img src={data.raster_sizes[0].formats[0].preview_url}
                            data-url={data.raster_sizes[6].formats[0].preview_url}
                            alt="icon" />
                    </div>
                </React.Fragment>
            )
        });

        this.setState({
            iconImage: this.viewerIcon
        })
    }

    handleClickIcon(e) {
        console.log(e.target.dataset.url);
        this.props.onChangeUrlIcon(e.target.dataset.url);
    }

    componentDidMount() {
        this.takeCategory();
    }

    render() {

        const iconImage = this.state.iconImage;

        return (
            <>
                <label className="label">
                    <span>Иконки: </span>
                    <div className="block-icons-form" placeholder="иконки">
                        {iconImage}
                    </div>
                </label>
            </>
        )
    }
}