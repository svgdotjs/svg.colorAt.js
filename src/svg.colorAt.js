;SVG.extend(SVG.Gradient, {
  // Get color at given offset
  colorAt: function (offset) {
    var first, last

    // find stops
    this.each(function () {
      if (this.attr('offset') <= offset) first = this
    })

    last = first.next()

    // if first is the last stop
    if (!last) return first.attr('stop-color')

    var blend, relative, fo, lo

    // create morph
    blend = new SVG.Color(first.attr('stop-color'))
    blend.morph(last.attr('stop-color'))

    // calculate relative offset
    fo = first.attr('offset')
    lo = last.attr('offset')
    relative = (offset - fo) / (lo - fo)

    return blend.at(relative)
  }
})
