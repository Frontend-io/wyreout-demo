import React from 'react'
import { 
    Box, 
    Text, 
    CircularProgress, 
    CircularProgressLabel,
    Divider, 
    Heading, 
    HStack, Stack, 
    Grid, 
    Switch, 
    FormControl, 
    FormLabel, 
    Flex, 
    useColorModeValue} from "@chakra-ui/react"
import { DashboardLayout, Page, WyreButton, WyreMessage } from 'src/components'
import { LightBulb } from 'src/assets'
import { BsReply } from 'react-icons/bs'
import { ITransaction } from './types'


const Toggler = ()=> {
    const [mode, setMode] = React.useState<boolean>(false)

    return(
        <FormControl w="auto" display="flex"  alignItems="center">
            <FormLabel
                fontWeight="bold"
                onClick={()=> setMode(false)}
                color={useColorModeValue((!mode ? "green.500" : "black"), (!mode ? "green.500" : "gray.400"))} 
                fontSize="sm" 
                mb="0">No</FormLabel>
            <Switch 
                isChecked={mode}
                onChange={({target})=> setMode(target.checked)} 
                colorScheme="green" 
                id="auto-debit" />
            <FormLabel
                fontWeight="bold"
                color={useColorModeValue((mode ? "green.500" : "black"), (mode ? "green.500" : "gray.400"))} 
                fontSize="sm" 
                ml={3} 
                htmlFor="auto-debit" 
                mb="0">Yes</FormLabel>
      </FormControl>
    )
}

const TransactionsList = ({ type, amount, date }:ITransaction)=> {
    const modes:any = {
        sent: {
            color:"red.500",
            bg:"red.50",
        },
        received: {
            color:"#17B899",
            bg:"green.50"
        }
    }

    return(
        <HStack w="full">
            <Stack w="full" isInline align="center" spacing={5} justify="space-between">
                <Stack isInline spacing={5} align="center">
                    <Flex
                        p=".5rem"
                        justify="center"
                        align="center"
                        fontSize="lg" 
                        boxSizing="border-box" 
                        boxSize="40px" 
                        borderRadius="full" 
                        {...modes[type]}
                        transform={ type === "received" ? "rotateY(180deg)" : ""}>
                        <BsReply />
                    </Flex>
                    <Text 
                        color={modes[type]['color']} 
                        fontWeight="semibold" 
                        fontSize={{base:"x-small", md:"sm"}}>{amount}</Text>
                </Stack>
                <Text 
                    textTransform="capitalize" 
                    fontWeight="semibold" 
                    fontSize={{base:"x-small", md:"sm"}}>{type}</Text>
                <Text 
                    p={{base:".5rem", md:".5rem 1rem"}} 
                    borderRadius="md" 
                    bg="rgb(187, 41, 187, .05)" 
                    fontWeight="semibold" 
                    color="#BB29BB" 
                    fontSize={{base:"xx-small", md:"x-small"}}>{date}</Text>
            </Stack>
        </HStack>
    )
}

const Transactions = ()=> {
    const data = {
        transaction: [
            {value: "N921,000.00", title:"Received"},
            {value: "$1,210.00", title:"Sent"},
            {value: "10hrs", title:"Time left"},
        ],
        log: [
            {"In Bound":"Dollar", "Maturity Date":"10 June, 2020"},
            {"Out Bound":"Naira", "Estimate":"10 hrs"}
        ],
        recentTransactions:[
            {id:1, amount:"N3,200.00", type:"received", date:"Feb 10th, 12:30pm"},
            {id:2, amount:"N3,200.00", type:"sent", date:"Feb 10th, 12:30pm"},
            {id:3, amount:"N3,200.00", type:"received", date:"Feb 10th, 12:30pm"},
            {id:4, amount:"N3,200.00", type:"received", date:"Feb 10th, 12:30pm"}
        ]
    }

    return(
        <Page title="My Transactions">
            <DashboardLayout>
                <Box w="full" borderRadius="sm" bg={useColorModeValue("white", "gray.900")} boxShadow="sm" p={{base:"1rem", md:"2rem"}}>
                    <Stack direction={{base:"column", lg:"row"}} w="full" spacing={10} >
                        <Box flex={1}>
                            <CircularProgress 
                                trackColor="transparent" 
                                color="#17B899" 
                                aria-label="80%" 
                                value={80} 
                                size="100px" 
                                thickness="4px">
                                <CircularProgressLabel color="#17B899" fontSize="md">80%</CircularProgressLabel>
                            </CircularProgress>
                        </Box>
                        <Box flex={7}>
                            <Stack w="full" isInline spacing={3} justify="space-between" align="center">
                                <Heading fontSize={{base:"md", md:"md", lg:"xl"}}>Buy Property</Heading>
                                <WyreButton variant="outlined">Stop Transaction</WyreButton>
                            </Stack>
                            <Divider my={3} />

                            <HStack spacing={10}>
                                {
                                    data.transaction.map(({ value, title },i)=> (
                                        <Box key={title}>
                                            <Heading 
                                                color={!i ? "#BB29BB" : "black"}
                                                opacity={.6} 
                                                fontSize={{base:"xs", md:"md"}}>{value}</Heading>
                                            <Text 
                                                mt={1.5}
                                                opacity={.6} 
                                                letterSpacing={1.4}
                                                textTransform="uppercase" 
                                                fontWeight="semibold" 
                                                fontSize="xs">{title}</Text>
                                        </Box>
                                    ))
                                }
                            </HStack>
                            <WyreMessage 
                                mt="2rem"
                                status="info"
                                icon={<LightBulb />}
                                description="Based on your selected convertion rate, you’re likely to archive your goal on time. keep going" />
                            
                            <Box>
                                {
                                    data.log.map((a)=> (
                                        <Grid 
                                            gridTemplateColumns="8fr 1fr" 
                                            py="1rem" 
                                            mt={3} 
                                            justify="space-between" 
                                            align="space-between" 
                                            gap={3}>
                                            {
                                                Object.entries(a).map(([key, value])=> (
                                                    <Box minW={ 1 && "100px" } key={key}>
                                                        <Text 
                                                            mt={1.5}
                                                            opacity={.6} 
                                                            textTransform="capitalize" 
                                                            fontWeight="semibold" 
                                                            fontSize="xs">{key}</Text>
                                                        <Text 
                                                            mt={1.5}
                                                            opacity={.6} 
                                                            color="#BB29BB"
                                                            letterSpacing={1.1}
                                                            textTransform="capitalize" 
                                                            fontWeight="bold" 
                                                            fontSize="xs">{value}</Text>
                                                    </Box>
                                                ))
                                            }
                                        </Grid>
                                    ))
                                }
                            </Box>
                            <HStack spacing={3} justify="space-between" align="center" my={12}>
                                <Heading fontSize={{base:"sm", md:"md"}}>Allow Auto Debiting?</Heading>
                                <Toggler />
                            </HStack>

                            <Box my={16}>
                                <Heading fontSize={{base:"sm", md:"md"}}>Recent Transactions</Heading>
                                <Stack mt={6} spacing={7}>
                                    {
                                        data.recentTransactions.map((t)=> <TransactionsList {...t} key={t.id} />)
                                    }
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </DashboardLayout>
        </Page>
    )
}

export default Transactions