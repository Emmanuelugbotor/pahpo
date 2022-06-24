import { Link } from "react-router-dom"

const Button=(props)=>{
    const {
        backgroundColor,
        borderColor,
        marginTop, 
        fontWeight,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomRightRadius,
        height,
        borderBottomLeftRadius, 
        color,
        textAlign,
        width,
        path,
        value
    } = props

    return (

        <Link to={path} className="btn btn" 
        style={{
            marginTop: '20px',
            color : color ? color :'white',
            textAlign :  textAlign ? textAlign :"center",
            width,
            backgroundColor: backgroundColor ? backgroundColor : '#005a87',
            borderColor: borderColor ?borderColor : '#005a87',
            marginTop: marginTop ? marginTop : '20px', 
            fontWeight:  fontWeight ? fontWeight :'bold',
            borderTopLeftRadius: borderTopLeftRadius ? borderTopLeftRadius : '35px',
            borderTopRightRadius: borderTopRightRadius ? borderTopRightRadius :'35px',
            borderBottomRightRadius: borderBottomRightRadius ? borderBottomRightRadius : '35px',
            height:  height ? height :"45px" ,
            borderBottomLeftRadius:  borderBottomLeftRadius ? borderBottomLeftRadius :'35px' 
         }}> { value } </Link>
 
    )
}

export default Button;