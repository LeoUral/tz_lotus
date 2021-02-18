import React from 'react';

export default class IconBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconDataCategories: [],
            viewNameCategory: []
        }

        this.getCategories = this.getCategories.bind(this);
        this.viewerCategories = this.viewerCategories.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }

    async getCategories() {
        // образец URL иконка категории - https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${category}&count=10
        // URL категорий - https://iconfinder-api-auth.herokuapp.com/v4/categories?count=10
        // const category = 'science';//transportation, architecture, computer, electronic, network, industry, science
        // const url = 'https://iconfinder-api-auth.herokuapp.com/v4/icons/1814097';
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'Bearer Svvh55mogtsQVuOZQvjSEd3ai428StsXZdIuoUSViQECV1qTRrEJELm86Fq3ijLU'
            },
            contentType: 'application/json'
        };
        this.response = await fetch(`https://iconfinder-api-auth.herokuapp.com/v4/categories?count=100`, options);
        this.setState({
            iconDataCategories: await this.response.json()
        })

        console.log(this.state.iconDataCategories.categories); //test
        this.viewerCategories();

    }

    viewerCategories() {

        this.viewerCategory = [
            <React.Fragment key={'noname'}>
                <option value={''} >выберете категорию</option>
            </React.Fragment>
        ];
        const categories = this.state.iconDataCategories.categories;

        categories.forEach(data => {

            if (!data.identifier.includes("-") && !data.name.includes("Flags")) { // проверка на не действующую категорию

                this.viewerCategory.push(
                    <React.Fragment key={data.name}>
                        <option value={data.identifier} >{data.name}</option>
                    </React.Fragment>
                )
            }

        });
        console.log(this.viewerCategory);
        this.setState({
            viewNameCategory: this.viewerCategory
        })
    }

    handleChangeCategory(e) {
        console.log(e.target.value);//test       
        this.props.onChangeCategory(e.target.value);
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {

        const category = this.state.viewNameCategory;

        return (
            <>
                <label className="label">
                    <span>Категория иконок: </span>
                    <select className="input-form" size="1" placeholder="категория иконок"
                        onChange={this.handleChangeCategory}
                    >
                        {category}
                    </select>
                </label>
            </>
        )
    }
}