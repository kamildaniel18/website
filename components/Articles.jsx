const posts = [
    {
      title: 'Making The Polluter Pay: How Blockchain Can Aid Climate Adjudication',
      href: 'https://blockchainclimate.org/making-the-polluter-pay-how-blockchain-can-aid-climate-adjudication/',
      category: { name: 'Article', href: 'https://blockchainclimate.org/making-the-polluter-pay-how-blockchain-can-aid-climate-adjudication/' },
      description:
        'Proving causation is a major impediment to effectively implementing environmental law. In providing greater traceability, blockchain allows courts to better adjudicate on the source of pollution.',
      date: 'May 18, 2020',
      datetime: '2020-05-18',
      imageUrl:
        'https://images.unsplash.com/photo-1569410593054-c37f3c20c52d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      readingTime: '6 min',
      author: {
        name: 'Institure of Blockchain & Climate',
        href: '#',
        imageUrl:
          'https://blockchainclimate.org/wp-content/uploads/2020/11/cropped-BCI_Logo_LR-400x333.png',
      },
    },
    {
      title: 'Redefining Compliance for Climate Change Procedural Obligations under the Paris Agreement',
      href: '#',
      category: { name: 'Thesis', href: '#' },
      description:
        'Introducing blockchain - a preventative technology to include transparency, accountability and science.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1561485704-31d8a20503cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      readingTime: '4 min',
      author: {
        name: 'Kamil Daniel Akdag',
        href: '#',
        imageUrl:
          'https://a.academia-assets.com/assets/academia-logo-redesign-2015-45ae31566d1421084023fae986d81b06469982455d4be698a5226a904e7836a9.svg',
      },
    },
    {
      title: 'The Development of a Quasi-Loss and Damage Compensatory System for Developing Countries through Climate Litigation',
      href: 'https://cclr.lexxion.eu/article/CCLR/2020/1/8',
      category: { name: 'Article', href: '#' },
      description:
        'The Paris Agreement of COP21 distinctly recognises the issue of climate change loss and damage with Article 8 in the main text and Paragraph 51 in its decision text.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      imageUrl:
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      readingTime: '11 min',
      author: {
        name: 'Carbon and Climate Law Review',
        href: '#',
        imageUrl:
          'https://www.lexxion.eu/wp-content/uploads/2018/08/CCLR_Logo-1024x305.png',
      },
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-48 lg:pb-28 max-w-5xl mx-auto">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-regular italic font-serif tracking-tight text-gray-900 sm:text-4xl">Notable publications</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 font-light sm:mt-4">
              Notable articles and publications covering a range of legal themes.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase text-green-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-medium italic font-serif text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  