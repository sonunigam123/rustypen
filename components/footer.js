import Container from './container'
import GithubIcon from '../public/assets/icons/github.svg'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 text-center">
          <a href="https://github.com/rustypen">
            <GithubIcon width={24} height={24} className="inline-block" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
