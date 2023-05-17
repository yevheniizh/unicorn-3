import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../tina/__generated__/client'
import { Accordion, AccordionContainer } from '../components/accordion'

const BlogPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {data.home?.title}
      </h1>

      {props.data?.home?.accordions.length && (
        <AccordionContainer>
          {props.data?.home?.accordions
            .map( ( {title, description} ) => (
              <Accordion title={title} key={title}>
                <TinaMarkdown content={description} />
              </Accordion>
            ))
          }
        </AccordionContainer>
      )}
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.filename}.md` }
  try {
    const res = await client.queries.home(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  }
}

export const getStaticPaths = async () => {
  const postsListData = await client.queries.homeConnection()
  
  return {
    paths: postsListData.data.homeConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  }
}

export default BlogPage
