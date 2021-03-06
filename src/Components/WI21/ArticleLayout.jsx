import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './ArticleLayout.css';
class ArticleLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
        this.props.setTheme('white');
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="columnLeft" md={3}>
                        <Row>
                            <p>Branch Check</p>
                        </Row>




                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="columnRight" md={8}>
                        <Row className="articleTitle">
                            <p>Article Title</p>
                        </Row>
                        <Row className="articleText">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque sollicitudin mi, eget ornare nisl consectetur sed. Curabitur vel vehicula nibh. Aliquam in magna non justo fringilla vulputate et nec leo. Morbi vestibulum, sapien sed bibendum gravida, metus enim tempus velit, et scelerisque ipsum justo eu felis. Nunc interdum pellentesque odio, mattis maximus mauris pulvinar eget. Aenean sit amet arcu sit amet felis imperdiet iaculis a non tortor. Duis molestie, risus eget finibus tristique, tellus massa molestie nisi, a suscipit velit augue non sem. Donec ac purus eget urna elementum suscipit nec sit amet sem. Suspendisse ut luctus lorem. Curabitur sollicitudin ultricies mi a luctus. Aliquam interdum tempor risus, nec consectetur tellus consectetur vitae. Suspendisse vestibulum dapibus orci sed molestie.

    Fusce et varius orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque at sollicitudin sem. Aenean pretium ipsum nibh. In eleifend pharetra est ac porta. Nullam eros neque, facilisis quis ligula et, interdum tincidunt odio. Nunc eget nulla auctor, venenatis mauris at, blandit purus. Pellentesque eu ullamcorper odio. In vulputate vehicula lectus non suscipit. Aliquam dapibus diam at sapien posuere dignissim. Integer eu laoreet massa, et tincidunt magna. Duis consequat tincidunt tincidunt. Sed vestibulum mi sed sapien sagittis, convallis aliquet metus hendrerit. Sed tincidunt consequat lacinia. Quisque fermentum gravida auctor. Ut feugiat diam nec eros commodo commodo.

    Etiam ac risus elit. Sed maximus, odio et ornare facilisis, turpis diam facilisis quam, ac sagittis purus purus et libero. Nulla nec convallis urna. Praesent porttitor dolor ante, quis facilisis ligula consectetur et. Curabitur vulputate vel tortor ac pellentesque. Fusce eu sem ut nunc suscipit placerat. Aenean dapibus nunc lorem, aliquet consequat dui consequat sit amet. Duis consectetur convallis turpis quis faucibus. Nulla vel ex urna.

    Fusce purus massa, viverra quis neque ac, auctor sollicitudin ex. Nulla facilisi. In suscipit erat odio, vel vestibulum turpis gravida sed. Sed iaculis ultricies ex et molestie. Nulla cursus, sem facilisis venenatis faucibus, arcu orci euismod tellus, non luctus sapien est quis nisi. Praesent ultricies finibus vulputate. Quisque sed augue leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id consequat elit, eget pharetra sapien. Nulla facilisi. Vivamus finibus velit sed velit dapibus condimentum.

    Sed blandit placerat nulla, non vulputate velit tristique ut. Morbi interdum elit sit amet bibendum congue. Phasellus in magna dolor. Cras urna felis, vestibulum sit amet urna eu, semper ornare ante. Quisque turpis turpis, lacinia sed ex ut, finibus varius massa. Mauris ut ornare eros, ut semper odio. Etiam tempus arcu pulvinar pulvinar feugiat.

    Phasellus malesuada erat dolor, vitae ornare arcu malesuada id. Fusce mattis tristique mattis. Etiam nulla purus, tincidunt ut enim a, egestas faucibus enim. Fusce vel augue sed massa aliquam scelerisque non eget ligula. Curabitur vel eros in lectus vulputate porttitor sagittis vitae massa. Vestibulum tincidunt mauris et ultrices maximus. Sed mollis a diam tincidunt euismod. Duis odio metus, imperdiet non commodo accumsan, placerat at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id velit a felis molestie tincidunt vel varius tortor. Suspendisse rhoncus libero id condimentum posuere. In accumsan nisl sed gravida rhoncus. In tempus hendrerit sem tristique porta.

    Phasellus auctor dolor eu enim imperdiet feugiat. In hac habitasse platea dictumst. Nulla eu nisi maximus, ullamcorper arcu eu, tempor nisi. Vestibulum dignissim, velit nec fringilla auctor, tellus odio egestas nisi, vitae bibendum neque enim vitae mi. Fusce molestie dolor ac velit pretium, sed suscipit dui bibendum. Nunc accumsan diam quis orci lacinia, et condimentum nibh commodo. Nunc in odio libero. Phasellus rhoncus finibus suscipit. Aenean placerat at nibh ac iaculis. Fusce malesuada, leo vitae pulvinar euismod, lectus ex pretium ipsum, in tristique mi mauris in nisi. Aenean tellus urna, placerat eu nunc quis, congue semper velit. Maecenas congue elit vel maximus ultricies. Vestibulum hendrerit turpis vitae pellentesque euismod.

    Nullam feugiat leo nisi, sit amet vehicula sapien convallis mattis. Suspendisse potenti. Aenean pharetra imperdiet velit ut tristique. Donec quis enim accumsan, varius erat quis, interdum nibh. Nunc ac maximus est, id fermentum elit. Ut id lobortis erat. Integer magna erat, euismod sit amet nulla a, consectetur ullamcorper eros. Proin scelerisque mi nec gravida pellentesque. Aenean rhoncus odio imperdiet dignissim aliquet. In sed imperdiet nisi.

    Phasellus imperdiet est erat, at egestas turpis finibus nec. Etiam auctor pulvinar nisl. Donec mi enim, tincidunt a risus eu, dignissim porttitor ex. Curabitur ultricies eleifend lectus, vel sodales massa ullamcorper sed. Nulla quis volutpat justo. In quis neque nibh. Quisque egestas, orci non placerat ultrices, nulla odio pulvinar nisi, a lacinia nisi nulla id elit. Curabitur lacus quam, hendrerit cursus pulvinar id, viverra porttitor ante. Pellentesque lobortis laoreet viverra. In massa sem, euismod accumsan quam vel, auctor dictum purus. Quisque ultrices magna ut mauris semper, quis ullamcorper sapien semper.

    Pellentesque a eros tellus. Nam est metus, efficitur nec magna at, imperdiet ullamcorper lectus. Aliquam erat volutpat. Proin eget auctor dui, ac venenatis est. Integer laoreet accumsan nunc, quis dignissim augue aliquet in. Fusce eget massa quis turpis vehicula semper id eu mauris. Ut sed lectus eget metus vehicula sollicitudin. In bibendum imperdiet lacinia. Phasellus vehicula commodo sem, eu tincidunt velit efficitur nec. Maecenas ante lorem, venenatis lacinia elit ut, posuere gravida ex. Mauris eu erat sed dui condimentum viverra. Nulla facilisi. Donec non convallis libero.</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(ArticleLayout);