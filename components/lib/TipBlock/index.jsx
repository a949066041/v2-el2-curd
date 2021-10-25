export default {
  name: 'TipBlock',
  functional: true,
  props: {
    tipStyle: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    bottom: {
      type: Number,
      default: 16
    },
    size: {
      type: String,
      default: '18px'
    }
  },
  render(h, c) {
    const { size, bottom, tipStyle } = c.props
    return (
      <div class='curd__tip-block' pl10 style={{
        fontSize: size,
        marginBottom: `${bottom}px`,
        ...tipStyle
      }}>{ c.props.title }</div>
    )
  }
}