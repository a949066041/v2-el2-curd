 export default {
   functional: true,
   name: 'TipBlock',
   props: {
     tip: {
      type: String,
      default: ''
     },
     color: {
      type: String,
      default: ''
     },
     size: {
      type: String,
      default: '18px'
    }
   },
   render(h, context) {
     const { tip, color, size } = context.props
     return (
       <blockquote class='curd__tip-block'>
         <div pl10 class='curd__tip-block-title' style={{ borderLeftColor: color, fontSize: size }}>{ tip }</div>
       </blockquote>
     )
   }
 }
 