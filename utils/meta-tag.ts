export function AboutMeta() {
  return {
    title: "About | Santosh Anand",
    meta: [
      {
        hid: 'about',
        name: 'about',
        content: 'This page content about information of Santosh Anand'
      }
    ]
  }
}

export function StocksMeta() {
  return {
    title: "Stocks | Santosh Anand",
    meta: [
      {
        hid: 'about',
        name: 'about',
        content: 'This page content stocks information of Santosh Anand'
      }
    ]
  }
}

export function BlogsMeta() {
  return {
    title: "Blogs | Santosh Anand",
    meta: [
      {
        hid: 'blogs',
        name: 'blogs',
        content: 'This page has all the blog listed on this site'
      }
    ]
  }
}
export function BlogSingleMeta(title: string = "Blog Item", description: string) {
  return {
    title: title + " | Santosh Anand",
    meta: [
      {
        hid: 'blogs',
        name: 'blogs',
        content: description ? description : 'This page has all the blog listed on this site',
      }
    ]
  }
}

export function ProjectsMeta() {
  return {
    title: "Projects | Santosh Anand",
    meta: [
      {
        hid: 'about',
        name: 'about',
        content: 'This page content projects information of Santosh Anand'
      }
    ]
  }
}

export function ResumeMeta() {
  return {
    title: "Resume | Santosh Anand",
    meta: [
      {
        hid: 'about',
        name: 'about',
        content: 'This page content resume information of Santosh Anand'
      }
    ]
  }
}