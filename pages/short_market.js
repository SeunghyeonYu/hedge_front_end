import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
                <title>Pricing - Brand</title>
                <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i"/>
                <link rel="stylesheet" href="assets/fonts/simple-line-icons.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css"/>
                <link rel="stylesheet" href="assets/css/hedgeManager.css"/>
            </Head>

            <main className="page product-page">
                <section className="clean-block clean-product dark">
                    <div className="container">
                        <div className="block-heading">
                            <h2 className="text-info">환 리스크 관리를 위한 전략 추천 결과 상세</h2>
                        </div>

                        <div className="block-content">

                            <div className="product-info">

                                <div className="row">

                                    <div>
                                        <div className="info">
                                            <h3>단기금융 시장 이용</h3>
                                            <div className="price">
                                                <h3>($300.00)</h3>
                                            </div>
                                            <div className="row">
                                                <div className="summary col-md-6">
                                                    <div className="table-responsive">
                                                        <table className="table my-2">
                                                            <thead className="thead-light">
                                                            <tr>
                                                                <th>해지전략</th>
                                                                <th>t=0</th>
                                                                <th>t=?</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td className="stat">수출대금 수취</td>
                                                                <td></td>
                                                                <td>(+$100)</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="stat">달러화 차입</td>
                                                                <td>(+$92.250)</td>
                                                                <td>(-$100)</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="stat">현물환 매도</td>
                                                                <td>(-$92.2509 + 1,235￦/$*$92.2509)</td>
                                                                <td></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="stat">원화 대출</td>
                                                                <td>(￦113,930)</td>
                                                                <td>(+￦120,310)</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="stat">합계</td>
                                                                <td>(0)</td>
                                                                <td>(￦123,000)</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="summary col-md-6">
                                                    <br/>
                                                    <p>선물환 매도는 현재 시점에서 미리 정한 환율로 미래시점에 외환을 매도하는 것을 의미합니다.</p>
                                                    <p>선물한 매도를 하게 되면 미래의 특정 시점에 일정가격으로 달러를 팔고 이를 원화로 교환하게 됨으로써 미래 시점에 '달러가 들어오는 상황'이 '원화가 들어오는 상황'으로 바뀌어 환변동 위험에 노출되는 것을 막아줍니다.</p>
                                                    <p>따라서 귀사가 (3)년 뒤에 $()를 수취하게 되는 경우 선물환 매도를 하게 되면 환율 변동과 상관없이 안정적으로 ()원을 수취할 수 있게 됩니다.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <br/><br/>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead className="thead-dark">
                                                        <tr>
                                                            <th>구분</th>
                                                            <th>예금이자율</th>
                                                            <th>차입이자율</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="stat">원화</td>
                                                            <td>연 (5.6)%</td>
                                                            <td>연 (6.4)%</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="stat">달러화</td>
                                                            <td>연 (7.6)%</td>
                                                            <td>연 (8.4)%</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead className="thead-dark">
                                                        <tr scope="col">
                                                            <th>구분</th>
                                                            <th>현물환 매입환율</th>
                                                            <th>현물환 매도환율</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td className="stat">달러화</td>
                                                            <td>(1,245원/$)</td>
                                                            <td>(1,235원/$)</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link href={`/result_recommend`}>
                                <button className="btn btn-outline-primary btn-block " type="button">다른 전략 보기</button>
                            </Link>

                        </div>
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </div>
    )
}