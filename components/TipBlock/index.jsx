import './style.scss'

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
      default: '16px'
    }
  },
  render(h, c) {
    return (
      <div class='mx-tip-block' pl10 style={{
        fontSize: c.props.size,
        marginBottom: `${c.props.bottom}px`,
        ...c.props.tipStyle
      }}>{ c.props.title }</div>
    )
  }
}
