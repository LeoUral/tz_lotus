import React from 'react';

export default class TitleMember extends React.Component {

    render() {

        return (
            <>
                <div className="member__title-block">
                    <h4  > Параметры и требования </h4>
                    <h5 className="line-bottom"> <br></br> </h5>
                    <div className="bg-gray"> Наличие комплекса мероприятий, повышающих стандарты качества изготовления </div>
                    <div> Срок изготовления лота, дней </div>
                    <div className="bg-gray"> Гарантийные обязательства, мес </div>
                    <div> Условия оплаты </div>
                    <div className="bg-gray"> <br></br> </div>
                    <div className="bg-gray"> Стоимость изготовления лота, руб. (без НДС) </div>
                    <div className="bg-gray"> <br></br> </div>
                    <div> Действия </div>
                </div>
            </>
        )
    }
}