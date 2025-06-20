import { lazy } from "react";
import Overview from "./Overview";
const Tickets = lazy(() => new Promise((resolve) => {
    return setTimeout(() => resolve(import("./Tickets")), 2000)
}))
import Ideas from "./Ideas";
import Contacts from "./Contacts";
import Agents from "./Agents";
import Articles from "./Articles";
import TicketCreate from "./TicketCreate"
import TicketsMore from "./TicketsMore";
export {Overview, Tickets, Ideas, Contacts, Agents , Articles, TicketCreate, TicketsMore}