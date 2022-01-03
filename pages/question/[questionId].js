import React,{ useRef,useState} from 'react'
import {useRouter} from 'next/router'
import {FaImage, FaLine} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
function QuestionDetail() {
  const [coverImage,setCoverImage] = useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWEhgVFRUZGBgaGhgaGBgVGBgaGBgYGBgZGhgYGBgcIS4lHB4rHxgYJjgmKy80NTU1GiQ7QDs0Py40NTQBDAwMEA8QHxISHjErJSs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND00NDQ0NDQ0NDQ0NP/AABEIAOgA2QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEAwYDBwEHBAMAAAABAhEAAwQSITEFQVEGEyJhcYEykaEHFEJSYrHBciMzgpKy0fAVFuLxQ4Ph/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAwEAAgICAgMAAwAAAAAAAAECEQMhEjFBUQRhEyJxMoGR/9oADAMBAAIRAxEAPwDr7NTbNRO9Nk0ABinFpKClisYVQIoUZFYwmiNKIpJrGBRikilCsYFNXroRSxIHqQAT0k6Uu4YBNYXj3E2zhiEnVRlZjy3BiGXz09JoVWInycnii5bjrZpUDKROVh4gRvEHUeoqBc7RsiBc6GGET4mZWnIkk+mu8DXzx4N1xMOSSSAZI0MGPajfA3NTkMyR1MzrtPt7VLyf2cv8nJvbN5gOOwpZyzkkgFcuUAHSIAHqav8AD3w6hlIPpMT7gVyPDvctvmKsDGgcQuWdVEzE84rd9nsaSwEsVZdFBBVIiSenseex3DTT9Mrxcr1KjTzSs1NZqAaqHSPg0c0yGpU1jCnaKaF2mcRcqOlyaeZ1aK67LJXozTVmnDSNDIJzpVbcGtWTLNRL6xsKeH2LSItu3S8lOIlOZaaq7AkKoUForvlUh9HForjwaQhNPOk1gexaNpSqQqxShWCgNTDtTznSortWMwB6Wr1GLUA1YXQcWc9y4UEkgiQVGUQZYltIA/4Nxyzimc3HhSD4QBoDGgVZUCDr6+e1dK4qf7F4zGBMKQJjYGeUwTGunscYtqb2fcKFY7kmTyCiSfCdAP3qPK8Wk8dc0rNOaohF5wXdmTL3KsxYl2BIIBOoB11ERM1f2nYCGYltySTqYgsep3+Z13qFhhbucYdE+FyVQgRlhQz+E6gwrjWtDiuDOLhVEkEnKeWWfxHlpprUrrMT+tPXjjh60kYuwCeIMQzaak5jJGUCCegkfKum9lMS0gK0sHTw5SzAN8ZMHUEZ46fIVzmBbxa2iQXW5fVyNSwMFJIHp6Qa6F2Rt5nAlhLASuWQURnzaz0XlzFU71HB+XCxOV8nRpoA0mjq4ooNSs1N0dYwLq02lsU6DSloqmkByKtrFLJiiWjdZFAIgXhTN+6JgVHub0tDVPFLsTdHrVO03bWl1N+xkMOaSl2g7TTJEU0rRafZKS9JqSpqFbSpSChQZbFk0U0c0h2oDCjUW9ThuU3cINDANkVqCtS3WkRpRSEbCz61g71t7WOe0W0vW2CE8nVdCPYT7jnW6NUXay2BhXvDR7I7xTG/dnPlPkYI/wAR6kFeXj8p6H4eTxrs5L2R7N3HvswZk7q4VzocpDL8RmZ2Ow3muh4ayL9kKbjwM6OysyuwbmG5fhPPpVTwLjCWcNiHubJczlVgtF3KBppqWz6mnVx5woa47M9uNLdsO2TMwOZWZQpAEyc1cXI6qv8APR6kTKRiMZwP7vi0QLlyuDnJLB0ZibZA5GEYHzU103sDw9y7X2kKBCD82cDxHqMu3rPOsZxbFri8fhzbJS2wAYtoSLbMZKk6EFmUevnXVOyWENvCIhDDVmhjLeIzJ866JbbW+8OblxLEXdHRUdVOYAo6IUTNFMYWKUDUcXhS1uVgaPh6Wr1BuPFNjFRvRUiuhy58VJVxNN3bs6ioxPnVVOiaWyXNNKVmqvs3I50/31Sc9lExwrRhKUKdWhpvFDdtadJoGmmah7D6F5qQ5os9EWopAY09IZqVcpGSacRjbPRhZphlM1JB8NFrBQd1WZ+0G/3fDbvMuUtqOpd1BA/w5j7Vq7Fc47f8WS/ctJbcNbt3bWZlMqzm8qtBG+UCJHMtU7rEW4uPaMbj+GTeuWmkMPiK9CQ2U/mEwRPl000uP7TObboLKmVZSS5jxCPhy679af4pgA3EEkEC4oBPWJkg8iIHzqu4tw9rRZd9CUYbN5+Rrh8lWaer4tbhk+zGMY4zO5loP+pZC8hpNei0YEA8iAfnXmbBAWrlm5OhJDSYhtVM9AJHyrvnZfjKXLSIzAOFCwTqY5R1/j3jpTSf+nHyS2t+i/oqM0VOc4dIuCaVR0wCDckUEepF1KYy06eoRrA3eaQwpUUhzFNIjEO0DpUJ8VlMUrH3IFVqktvrTeWGLnDXg1SZqswLQass9DRkWCmnVao6vRXL0VFLSmj7vUR71NvfqLcarTH2I6JQv06l0VTtdinrN3Wnrj60XyLUNTqrUO29QuNcZNrLbtgNef4QfhRRu7xy3gc4PSue2pWspEuniJ+IuIjqhZM7/CrOqltY0nU69AajNi/EilWOZ1QhQVCsZJzk6qQoOx1idJE854pimW/3jNLIQ+e4czMVMhyp8KLIkLG3rW87JdpVxmFF/Kqt3pt3AuoDBgEYTrqGtnyzeVRXK6XRe+HwwzXa6/i1F21ldrKg6IIe4kaZmBkyNDETrpyrnHDMRhvu97vGIfKxtISxCHUoEnSZgzyg+Vda7S8TT7w2HGRHhVQtm8bOPhIXZRmWWjwyWJgEHjWC4Y7Xns3FKNbBDAxKuDAU/XbpS63usvGYkl2dA4Z2kt4m0rfDdttnZTHwhjnyn+iD7VadolU2Q3Rlyn1/iP2rJdgOHW7tq7nWHzgbaqFXefVj8qtOL4V0NuwjkhySA+oTLz08idAB/NctzKvF8HTLfjrMR2mwQWLi7M3iWdM2XRgPQGam8G4gHQKT41ABHMgbEDn5+c+UaniHYi29ss1xzcCkhiQVkCcuWNpjURWXwHZ2MNbxbFQrPBRh+AnKrT5vy6EVebmpzSfi1Wo1nDe1d+0QqubqaeC74j7ONR5akbaVpv8Av3DoVGIV7BbSWRmQHpIGYepWqXgmFKKbrgKsSAyy8RoZ5T0GvWNqpO3SZsM7tiVueNciBUBUzl0YEmImR5UI5X5YLfDLWnVbWPR1zW3Vx1Ugx69PenbdyuC8J7QqAoZmRxpnWQPIkjUeddN7O9oGIRb5BFx8iOPzxKo8aeIbNz0HOuhcnw0ct8LS2XqNowkUwqE1IQU+qVRPCDWkF0imHarNrNR3w2tPNIRyylxdnNSsHg+UVcrhaft2AKzpNGUsrjgY2FH93NWjUiKVUx8K4tTdx6M0xfeKaPYjYM1Ic0hWmjOxrp9CjDiki9Bpm/cO1RmaqJb7E0uLWKqs4hbwyXWvXsVbzuEGTKHdBHhUKpzD1IGvSisnWDzrKcVRZuowGc3nYtAnKwaCI2nNOnWuH8yVKXXR2fiLyb7DxVrh+LVrTY9EuKy5Xa0UzEHQXFzZboMkSCrAjWdq1nYngF3A3MT3oUJduWhaVSCCVVyzwPhzaab+GuP8E4TfuPcsoAiKw7/EEeG2inQ5iQJO4WZYwK612P4dh8N4Fd8xfvXe8ZNzwlUEhQABMjU6k67VzpJIrbfrTHYB7q3FxhWc6CwzMWYM1iEMzqMyi0wE8m3g1DxGKHEWLWzk4jazBcui420kwBy75VG34gPZd1Y7Ju2GxVnEXQoxN5mtBP8A4ipZUuLB8WZVtkqI8MjeY5hxDsPxDDOW7lj3cOt2ycy+EgqyEeIEGDEA6bVpXbYXSaxfBa/ZrjMtx0bcn8WhVjEgz1Kx61rON4dzdtPbEsDE7gcwD0G8nz8qfsdnFxHdY8W1TEsiDFWSIR2IBZwuoDGJjn/UDM23fVYUjLrA0gE8gB1308j61y86yvJHTw2qnBF+0e4dXcklHzPtEqZIA2A/is/2fAHD8Ol4Bw8BEO5LuxUn+kGR0jrEXXFrh7m6yiQiXPCRo7BCYnp8/pWf4HfW7cwsABbdtQg6ZU8TepIHyqcp+DKv2aXiPD1vJkZnUdEIE+R0Mjy86xnavs2gRFRzpOVWIkEARMfhOusT+1bPFYV3YFLzJHJVB+pP8VjuIWBacgXDcOskiPF038RrcTafT/6BS32jBJdTuGRl8ecFTGoGgYT7bVquFXmTAqheSblm5bj8J71IA5zAJ8oI6VAxHAR3LN4munxSdid2UKOuvvT/AGQsm7buZjC4dCyjqzkwT6AOP8XlXXTTW/RHGnjO+YO9nto/51Vv8yg/zU23VdwxMlm2n5baL/lQD+KmJeE71dHA80kTSHcUGcAb1DZ5NbBW8JOalB6i5qWj0cAqHiaRNM3r0bU13x60ylh1Edtqh3BNWgtUT4UUZrGLUlQdKdsrINTDg5pF3DlRAq/mn0J4lZcta1HayKmthmmkMhFP5Z8gwaRACNKruNnD2/7d7TXrpIVLQYIjQPicxMD3nQQYNXqW5qr7RWoshwJNt0eD65T7Q1R5v7S/0V4erX76MFhMRexmNZLrKi2zKWbK5LNuVOdlTmwGmY6nN0gVpcKe6vdzOdNCkx4XInKek6mP6eZqk7EXku4zFXyYuOcqLGuUEFj7wvyNaDHYSLTMBLo4uzyJXcegAiPKvKu2rW/o9NQnDSNvZxYuIUdFU6DK2bxHkVWJO2wM1DxpvIgRTbRdtAyM39KDMR7x/FUOB4q90+F5yaF1YlQCZCIdyYAk6DbTkLLC4tkfOTnMa5iQY5eIHTboapXLMvGcy4aa1Ie4RiMlzXZgQ3lALSfSD7E1G7R8O75O/wAM5a7aksoX41I1IUjR4BgjeCNTEO8RxSPrkuA8znJHtEkeulQEvENoxnoh1H0BFMnNL7Bly9zDMcd7Rr9zuAIQxRk1IIGfwgzufi6Csb2N4o1u6F+IDxKCdByYD1B+lb7jvZpsTbvNbjPGYoRkDNuTm+FTIBMgL4txWO7LdlHe5nuF7SoxGUKc7EaES3hUesyOUa0qmZlpnSr8mmjUf9XvOxFlMpg6wDEnmxj6jlUPAcLAuDvLimT4vGMxGhMMPCJMaTOlWLYRUaAEIBMd40ID0BOtx9tdh61G45wsXLcBe6un+7uWXYWnYa5SoIAzbTHPeopr0uir32Te0AR7SPbIIRskLpAcSBHy0/VVF2c4YRxN8OCcjKLl3zFu4ZX+lmge9NdlMQ94JaMiLg7wEalreuvQ5d/MVvey2EUm9iI8Vy4VDdUVmKx/iZvkKtwzleLI895HkjSC5SWamiaIvXakeVVDmfWpCGq9zUhHgUXJNPskM9NLiKbzzTNwwJp5j7HbH3aaKar1xo2qR3lU8DJl0opxVoBKcUVyFxvu6S1uakAUDW02ENsPTD4UdKsWFNFaPkwYiGMPApnE8PD23Q7OrLPSRAPtvVjFCKPkzYefOzmKazir3hP9ncYkc5zMhU/X3rZ8V40GQLZBZrgIYASwB0AjmTt6Hyqp49wo2uK4sAQtzJcXzNyWY/5w9aa0mHwwCllD6STq55T+keWlefz+Kr1rPT4m3CZn8M97DnKm5MsqgOOZ15jSfkelIXjLs7HvAxBKsukLBiCo1U6RWkxnGMNaQu1xMq6jKQxJ3AEcyYri4xUHMJDbyNCD5Gtxz562hqrxOvYXjrZSz2mKzAZCGy/1DcDzPWrOzjLd1TkZX/Sd/dT71iuDNeGQozO4WWKDca6EDRh6jU61Y4jG23kXbORwCcyHI0xzB/mY3qbhb0NvRncVjnGNNnCX7qKWy5bjsER5OeFf8IidRO/lWld8WlpntYu3imXUp3SAkc8pR5JiTHOOtYPhXET97F25luhiQRdhviGVZLbQIE8ore3MFhmYKQ+GfWA5lCecMZB5bEVbk6xMSf0UOG7S377+HCJdeAWyq76DTZicq67CKf8A+4bIw7uLbjQI9sK2UOW8JS4ZCaBt9f2LPFuB4vCu2LsOCApLFSCcp+I5WGoiCRrqJqw7B4qwcI6OQzPcJdHAKkMFGx+IEL856TWfj4+SXRu9whdlcUwDX77BhiFuKCp8Vt7KeJGXkzW1BB1PhE7107gyZMPbQiCFEj9TeJvqTXN+A8Jy4nE4QgZUv2bqTyQsQw97TkV0cvXRxym3SOD8nkcpSSWNJcVHa9FSLVya6F0cLeholRsRigNDU7NptVRjLctIqvHjfYMGE4gZnl0p9sXIqMmFk/8AIqXawZmuhuUFaJsWyzVP7s05YwcGpfcVJ8iKKS2UUcUSmnBXGXExQo6SzVgBMaQaQ7UnNQSEdC6MCkA04tEaXpgftFsZbtm4NCyOun6GDDX/AOw/KsNj72RHuNrAJ1O5O0+pP1rrvajgCYu0ql2R0bOjplkEgqQQwIKkE6eQrjPanBNaxN3DszMqFQC2mYFVYMQsAzPpp5Vz8k4/I6p51EYyhwl2yzB8XddlB/urQJY7/iYhVG2xJ32pN+zbvX8mDs3CGAhGOdgeZ8Oy7bnTXWk8UwuRVIt5VP4ojX+dqm9k+L/d3cSwL5R4csHLJjXnrR8l4+S/8B/Ls6jo/CcNet20ts1u2FVV8KAscoiTqQD5kn0qb/0qzBLp3hO5uePNPUHT6Vl07QOy+G/lb9aJrG26/wA0ze41ics/ekAI5IgPt4SairhP09/wjX5TfT00D9lcKZK2gmbU5R4ZggQraDQn4YrM4vjBwdz7tdysoAOUS9tQxOWQQGRogwJAkHWoeI4lcYS2IusZGzFV3HLN/FUfGGVhLGX0gky0efOnVTbxobj53qSNng+0CH+4YL+ZM2ZD1IR4Zf8AmtR+xPE7PcPhrviCOxRgsjIxmQRqDmDH3rEcNssXDDQazPMaSPPcVtuxvAkvvfMshVVyukQCxO6EQ3wn5Gj/ABy/6L5L1+Sppb8F7wJGucRxGIUjuQlu2Dza4ERoPmoJn+oedacGo3CeGLh7C2kYtBJZ23dmJZmPuf2qaLcCu2I8ZSPM5+Tzt0RXQnSrDBiN6iOKlJEUcJpki7dFV5aX0601ir3SoIxDKRod+VdEcfQWzR20Wp2Hw4qkw2I61a4XE1O5pIpLRaC1Su6oWXkU7XNrL4hulq9N0zdesZvB171NteqG1ymnemUkapkl7lNNd1qOblGp1qinBGyystNPBqhIYFLW5U3IyrCQ7x++mp9hzrhHH+PvfxN67kChiqqrqSyBBlUHX4uZ8zXWe1WKupg7z2XCOqFgx5KpBcr+rIGjziuOXsUj+MyGLknNqGB/MRr5zXLzvMWDOvJD1ziiFSXCqQrEZlZlJ03gTG1UmCGHaXuIxYmQqKUtqBsBGmu9PY7I7BEOUkSQ05dNSS++8CI9am4LDKRNx0G+iPP7iorIj5WjLJjV8gs41ABlsj1J/wDyiXHAoB3SDTmJ/gUClgIIZ2MbD02kikWmtBRCuT5lQPmJNJi7eP2TxfRGZpWY5be1VONxIcxliDuYB96tngqQQY6LJP01qkxKRshQa7kkmujiSL8KWkvhdl86wQVkBvEIUHnqeW+k10PsA11MW9nKMjpnfUeHL8Lr11aI/V5Vzbh4QMGd8uUghchaYPyH1rb8CxLffsNfVptvcW2rAEaMShzAgb5jRpubTBzL+x1FMGFAVdFUAAeQ2ontzU+xhMltUktlULJ3MCJNJa3XYqOepK02taaurVm9umWtVSWLhQsrMYiptvC+VWFu0AdqkMgjanfJ8GUmduWyrTymp+Cu9alPYB5Uu3hQOVO7TnGZLGWOAvcqsZqtwtuKn1x0lp0y+hB2qLdqUDTF1aVBr0QnNRbzGprJTFyzNOmRaGUanLbUlrcUwWiqLtE6eE5r1N9/TObSmmammUSqmUX2h8RyYM2xOa74ZA0yqQXBPKdB5gmsBh0FxAsAOinUQM0EBZ+daT7ScfFpEkeImNJIbTXp8OaPOuZYfjNxCDoSOex19K4vyeKrrr4OiJdTqLhMIzvlUwyyzE7INoPMk9KuE4SqpLMzNEmMoE9AI09zWOt8WdXZ0LLm+IZpmd/3NWKdoJ3Zxp+KCK5+Ti5HmeitzXSXotmwzIoy2Ttzlv8ATp9Kj27VxgPAfZI5+Qpsdo9AO96fg/8AGl2O0eVQCyH1H+0VPx5Un0Tyvodw/DrhG0DzIqLjuEnXM6AzsoLOY8+QoXu0m8PEknwhv3NVr8ZHJSSTJmB/vTxHLujT5J6FhLNpbsXmOQbjK0segymR61pTileyhssAbeU5QIKkDTw8tRIrEXcQWYtG5J51K4NjCl9GMZcwDA/CVJghvKr3xOse9otyJUk9eo9SYe4Hto42dVYejAEfvRstHg8htIUUKmRcigAKq5RlCgaAAQKFyrySoi3Kby1IdaaNURJjbCjzUHFEFrA0KpCUzlpavQbGRMtkCnO9FV/eUO886k90tL6LAGktSC1NvdijhnSCZJo1UCmfvNNvfrPRdQMRUK5Uh2mod1qpBCwKDUa+5G5qbaOlQONXFS27/lUn35D5xXQmk+yaWnJ/tF4gHvqin4AZjrt+5YewrFVJ4hiTcuM53J+g0H0AqNXK229Z3RPjKQKFChQGFos8wB1J/gamnLioPxFj+lYHzOp+VMUKxgGhRk0VYwKFChWMekvs24kL3Dk8WZklWOvPxaA7ASVA/RWmYVxn7GMcVvG3nIDEyvInISs9Phc/+67OWoIi/oYammp56ilqoI0KigBRoaUSKGgwbJom2oGm3eiMhlmM0nP50WJOlQs/rRwOmmcVEvKasMtM3Umppj1JVvPKimpd2zzNQ7ophGg2amLlNEmaWgJOtGUyVdj1pazH2i4zJg2A0ZxppOikH/UUHv5Vq1rl/wBruLAZLepLIp8hDMT76rTW3hoWtI5fQoUKkdgKFCgKxiRYncQI/EwkD9/oJoYm6CdCzRuzmS3tyHlJrafZ52N++OWuH+zQw8agHp0LHprA1PIHb9ovs3sph2fC289xRPdvl8Sj4lUqqkNG1Bv9Cuu+kcRu3MxByhdADGgJ6xy9qaqTiQkykhT+Ft1PSeY6H5+caiMgUKFCsYuezHEWw+LtuDADDMJ0PQHymK9LYTEpctq6GVYSD/B6EHQjqK8zW+GlsOrKpZ2cwFBLFfhgKN/EPrXonsfaUYDDZWZlNpWzPv4hmPoJJjyoJ9k7WvUWd4aVFy61Lv7VCmKbyEci3TSoD4gjnU66/hqtezNL5GaJHfyKYZzyplkanFQ02oGDd24SKYz+dTVt9aP7uOn0oqg4aRTRFaNRSqQsQ8SulVjirt0mo1zCg1kxKlv0UpFKVasHwgUVGZarNac9S17AlcK+0XiBu4+4JJFtmXUDcGDtygKPau2PdygsdlBJ9AJNefO0b5sVdY7lpP8AUQC31mhftIfh7ZV0KFCkOkFP4SyXdUXdiAPLzpitn9lvBTiOIoT8Fkd6/nlICr7kj2msB+js3ZXg64PCpYUQQMznmztqxJ58h6KKv8O80l7dIAim6wlrR50+0DgRwmOe3Mq0Op6hgCdOWs/7msvXaPtm4O1y0mJUA90Mj/mysZEnmAflPnpxelzCkvUGK0+Hu2/uAzgRLAAbk67efP2rMCtFwThiMDnEsApAkwVZZBI58x7elLeZrKwm20vlE/sJxIWcRazEeFgy665SYuL5HwzXoHDWlRAiCFXRQNgJmB5V5+XhytbBVQjozhXWAZRyqlvzbCfeutdhe0S4rCoGMXra5LqHfMkKXHUHQ+RPpOhptk6zOjVPrTDYelhqcU0aQpCurGlRpE1bOgNQbuEMyKXANEV1najS11qUmHjenAlZS2bBhbVL7ulMYos9PhizXagaFCgUEmiLUKFYDI10TUS5boUKZEbMf9ofFPu+FYBlV3lQDqYymYHqANfOuGO5JJOpJJJ8zvQoVn7G4vQihQoUCoK7p9i+ACYR72WGdgMxG4BJ0P8Al+VChQYrOhu9Ms1HQp5IWyu4vg1vYe5aYSroymfMGD7GD7V5mxtjJcZN8pIB6jl9KFCjfsfiGK3ViEZWEBRaYnyCFYE+WY/WhQqHJ8HXw/8AJh4PDFEYk6scx6SUQtA82zUXAsS+D4mmRswuzCNs5ckZT5k7HzFChU4b8jXK8Wd2WY135wZE+R50tTQoV0M5xReKR3lChRRhhr2tEXoUKYUQz0maFCsE/9k=")
   const [show,setShow] = useState(false)
  const filePickRef = useRef()
    const router = useRouter()
    const questionId = router.query.questionId

    const fileUpload = (e) => {
     // creer un objet file reader
     const Reader = new FileReader();
     // si il existe
     if(e.target.files[0]){
         // lire 'image comme uen chaine de caracteres
         Reader.readAsDataURL(e.target.files[0]) 
     }
 
     Reader.onload = (readEvent) => {
         console.log(readEvent.target.result)
         setShow(true)
         setCoverImage(readEvent.target.result)
     }
    }

    const closeImage = () => {
  setShow(false)
    }

    const openImage = () => {
      filePickRef.current.click()
    }
    return (
        <div className="flex flex-col px-4 ">
             <h1 classname="text-2xl font-extrabold text-center ">the questionId is  :  {questionId}</h1>
             {/* publication  */}
             <div className="flex flex-col   bg-white shadow-md  rounded-sm  mt-6 pb-5 px-2 ">
        <p className="text-gray-700 text-lg font-bold italic">Why do we use it?</p>
        <p className="text-gray-700">erreur recontré :</p>
        <div className="bg-gray-100  h-48 overflow-scroll ">
          <p className="w-full break-words">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        </div>
        <p className="text-gray-700">code associé :</p>
        <img className="h-96 object-fill" src="https://www.pierre-giraud.com/wp-content/uploads/2019/05/javascript-code-element-script-html.png" />
        <div className="bg-gray-700 text-white    rounded-full  w-20 h-12 md:h-12 flex items-center justify-center mr-4 hover:bg-gray-900 cursor-pointer mt-5">
    <p className="  capitalize text-sm font-bold">
  web
      </p>
</div>
       </div>

       {/* afficher tout les commenctaires */}
       <h1 className="text-black text-lg md:text-xl font-semibold uppercase mb-12 mt-12">Les commentaires</h1>
      <div className="flex flex-col h-auto mb-5">
        <div className="flex flex-col border-b-2 border-gray-300">
          {/* commentaire */}
          <div className="bg-gray-100  h-auto  ">
          <p className="w-full break-words">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        </div>
        <img className="h-48 object-contain" src="https://www.pierre-giraud.com/wp-content/uploads/2019/05/javascript-code-element-script-html.png" />
          {/* userimage et nom */}
          <div className="self-end flex  gap-x-4 items-center">
            <img className="rounded-full  w-10 h-10" src="https://i.pinimg.com/736x/ab/d2/35/abd235f7ae6cfe501c85ca034a3c03a1.jpg" /> 
            <p>yvesLionelDiomande</p>
          </div>
          </div>
        <div className="flex flex-col border-b-2 border-gray-300">
          {/* commentaire */}
          <div className="bg-gray-100  h-auto  ">
          <p className="w-full break-words">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        </div>
          {/* userimage et nom */}
          <div className="self-end flex  gap-x-4 items-center">
            <img className="rounded-full  w-10 h-10" src="https://i.pinimg.com/736x/ab/d2/35/abd235f7ae6cfe501c85ca034a3c03a1.jpg" /> 
            <p>yvesLionelDiomande</p>
          </div>
          </div>
        <div className="flex flex-col border-b-2 border-gray-300">
          {/* commentaire */}
          <div className="bg-gray-100  h-auto  ">
          <p className="w-full break-words">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        </div>
          {/* userimage et nom */}
          <div className="self-end flex  gap-x-4 items-center">
            <img className="rounded-full  w-10 h-10" src="https://i.pinimg.com/736x/ab/d2/35/abd235f7ae6cfe501c85ca034a3c03a1.jpg" /> 
            <p>yvesLionelDiomande</p>
          </div>
          </div>
      </div>
       {/* pour faire un commentaire  */}
        <div className="flex  justify-center items-center bg-gray-200 pr-3 h-[10rem] ">
        <input type="file" onChange={fileUpload} className="hidden"  ref={filePickRef}  />
        <textarea type="text"   placeholder="veuillez entrer un commentaire " className="border-b-2  appearance-none block w-full py-3 px-4 leading-tight  h-[10rem] text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none l"/>
        {show ?        <div className="flex items-center justify-center relative  rounded-md self-end">
          <img src={coverImage}  className="w-20 h-12  rounded-md  "  />
          <ImCross className="fill-current text-red-400 absolute top-1 right-1 cursor-pointer"  onClick={closeImage} />
        </div> : " "} 
 
        {!show ?  <FaImage onClick={openImage} className='w-6 h-6 cursor-pointer  ' /> : "" }
         
        </div>
        </div>
    )
}

export default QuestionDetail
