import React from "react"
import { Box } from "@chakra-ui/react"

const Logo = (props:any)=> (
    <Box as="svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.41598 24.5715L2.36497 39.9999H11.4677L11.4677 40H22.734C31.6132 40 38.3443 34.8572 39.7432 27.7143C40.6139 23.269 39.2219 19.4346 36.2926 17.2804C37.4003 15.7595 38.205 14.0711 38.5751 12.2858C39.9866 5.47615 35.771 0.00016 28.9798 0.00016H22.0333L22.0333 0H12.8677L12.8676 0.00016H6.46236L4.06153 9.14299H10.467L8.81659 15.4287H2.40026L0 24.5715H6.41598ZM15.5816 24.5715L13.9312 30.8572H26.1843C27.9218 30.8572 29.7056 29.4469 30.1605 27.7143C30.6153 25.9818 29.5727 24.5715 27.8353 24.5715H22.5632C22.5516 24.5715 22.54 24.5715 22.5283 24.5715H15.5816ZM24.9461 15.4286C26.678 15.4192 28.4509 14.0126 28.9048 12.2858C29.3596 10.5533 28.3165 9.14299 26.579 9.14299H19.6327L17.9823 15.4286H24.9461Z" fill="white"/>
    </Box>
)

export default Logo