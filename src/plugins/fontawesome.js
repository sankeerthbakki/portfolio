import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faGithub, 
  faLinkedin, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(
  faGithub,
  faLinkedin,
  faTwitter,
  faEnvelope,
  faArrowRight
)

export { FontAwesomeIcon }