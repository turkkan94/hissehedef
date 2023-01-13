import React from "react";
import Link from "next/link";
function Sidebar() {
  return (
    <>
      <div className="app-menu navbar-menu">
        <div id="scrollbar">
          <div className="container-fluid">
            <div id="two-column-menu"></div>
            <ul className="navbar-nav" id="navbar-nav">
              <li className="menu-title">
                <span data-key="t-menu">Menu</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link active"
                  href="#sidebarDashboards"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                  aria-controls="sidebarDashboards"
                >
                  <i className="ri-dashboard-2-line"></i>{" "}
                  <span data-key="t-dashboards">Dashboards</span>
                </a>
                <div
                  className="collapse menu-dropdown show"
                  id="sidebarDashboards"
                >
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="dashboard-analytics.html"
                        className="nav-link"
                        data-key="t-analytics"
                      >
                        Analytics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard-crm.html"
                        className="nav-link"
                        data-key="t-crm"
                      >
                        CRM
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="index.html"
                        className="nav-link"
                        data-key="t-ecommerce"
                      >
                        Ecommerce
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard-crypto.html"
                        className="nav-link active"
                        data-key="t-crypto"
                      >
                        Crypto
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard-projects.html"
                        className="nav-link"
                        data-key="t-projects"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="dashboard-nft.html"
                        className="nav-link"
                        data-key="t-nft"
                      >
                        NFT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="dashboard-job.html" className="nav-link">
                        <span data-key="t-job">Job</span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarApps"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarApps"
                >
                  <i className="ri-apps-2-line"></i>{" "}
                  <span data-key="t-apps">Apps</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarApps">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="apps-calendar.html"
                        className="nav-link"
                        data-key="t-calendar"
                      >
                        Calendar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="apps-chat.html"
                        className="nav-link"
                        data-key="t-chat"
                      >
                        Chat
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarEmail"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarEmail"
                        data-key="t-email"
                      >
                        Email
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarEmail">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-mailbox.html"
                              className="nav-link"
                              data-key="t-mailbox"
                            >
                              Mailbox
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebaremailTemplates"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebaremailTemplates"
                              data-key="t-email-templates"
                            >
                              Email Templates
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebaremailTemplates"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="apps-email-basic.html"
                                    className="nav-link"
                                    data-key="t-basic-action"
                                  >
                                    Basic Action
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="apps-email-ecommerce.html"
                                    className="nav-link"
                                    data-key="t-ecommerce-action"
                                  >
                                    Ecommerce Action
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarEcommerce"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarEcommerce"
                        data-key="t-ecommerce"
                      >
                        Ecommerce
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarEcommerce"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-products.html"
                              className="nav-link"
                              data-key="t-products"
                            >
                              Products
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-product-details.html"
                              className="nav-link"
                              data-key="t-product-Details"
                            >
                              Product Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-add-product.html"
                              className="nav-link"
                              data-key="t-create-product"
                            >
                              Create Product
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-orders.html"
                              className="nav-link"
                              data-key="t-orders"
                            >
                              Orders
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-order-details.html"
                              className="nav-link"
                              data-key="t-order-details"
                            >
                              Order Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-customers.html"
                              className="nav-link"
                              data-key="t-customers"
                            >
                              Customers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-cart.html"
                              className="nav-link"
                              data-key="t-shopping-cart"
                            >
                              Shopping Cart
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-checkout.html"
                              className="nav-link"
                              data-key="t-checkout"
                            >
                              Checkout
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-sellers.html"
                              className="nav-link"
                              data-key="t-sellers"
                            >
                              Sellers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-ecommerce-seller-details.html"
                              className="nav-link"
                              data-key="t-sellers-details"
                            >
                              Seller Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarProjects"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProjects"
                        data-key="t-projects"
                      >
                        Projects
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarProjects"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-projects-list.html"
                              className="nav-link"
                              data-key="t-list"
                            >
                              List
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-projects-overview.html"
                              className="nav-link"
                              data-key="t-overview"
                            >
                              Overview
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-projects-create.html"
                              className="nav-link"
                              data-key="t-create-project"
                            >
                              Create Project
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarTasks"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTasks"
                        data-key="t-tasks"
                      >
                        Tasks
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarTasks">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-tasks-kanban.html"
                              className="nav-link"
                              data-key="t-kanbanboard"
                            >
                              Kanban Board
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-tasks-list-view.html"
                              className="nav-link"
                              data-key="t-list-view"
                            >
                              List View
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-tasks-details.html"
                              className="nav-link"
                              data-key="t-task-details"
                            >
                              Task Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarCRM"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCRM"
                        data-key="t-crm"
                      >
                        CRM
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarCRM">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-crm-contacts.html"
                              className="nav-link"
                              data-key="t-contacts"
                            >
                              Contacts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crm-companies.html"
                              className="nav-link"
                              data-key="t-companies"
                            >
                              Companies
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crm-deals.html"
                              className="nav-link"
                              data-key="t-deals"
                            >
                              Deals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crm-leads.html"
                              className="nav-link"
                              data-key="t-leads"
                            >
                              Leads
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarCrypto"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCrypto"
                        data-key="t-crypto"
                      >
                        Crypto
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarCrypto"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-crypto-transactions.html"
                              className="nav-link"
                              data-key="t-transactions"
                            >
                              Transactions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crypto-buy-sell.html"
                              className="nav-link"
                              data-key="t-buy-sell"
                            >
                              Buy &amp; Sell
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crypto-orders.html"
                              className="nav-link"
                              data-key="t-orders"
                            >
                              Orders
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crypto-wallet.html"
                              className="nav-link"
                              data-key="t-my-wallet"
                            >
                              My Wallet
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crypto-ico.html"
                              className="nav-link"
                              data-key="t-ico-list"
                            >
                              ICO List
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-crypto-kyc.html"
                              className="nav-link"
                              data-key="t-kyc-application"
                            >
                              KYC Application
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarInvoices"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarInvoices"
                        data-key="t-invoices"
                      >
                        Invoices
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarInvoices"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-invoices-list.html"
                              className="nav-link"
                              data-key="t-list-view"
                            >
                              List View
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-invoices-details.html"
                              className="nav-link"
                              data-key="t-details"
                            >
                              Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-invoices-create.html"
                              className="nav-link"
                              data-key="t-create-invoice"
                            >
                              Create Invoice
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarTickets"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTickets"
                        data-key="t-supprt-tickets"
                      >
                        Support Tickets
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarTickets"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-tickets-list.html"
                              className="nav-link"
                              data-key="t-list-view"
                            >
                              List View
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-tickets-details.html"
                              className="nav-link"
                              data-key="t-ticket-details"
                            >
                              Ticket Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarnft"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarnft"
                        data-key="t-nft-marketplace"
                      >
                        NFT Marketplace
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarnft">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-nft-marketplace.html"
                              className="nav-link"
                              data-key="t-marketplace"
                            >
                              Marketplace
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-explore.html"
                              className="nav-link"
                              data-key="t-explore-now"
                            >
                              Explore Now
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-auction.html"
                              className="nav-link"
                              data-key="t-live-auction"
                            >
                              Live Auction
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-item-details.html"
                              className="nav-link"
                              data-key="t-item-details"
                            >
                              Item Details
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-collections.html"
                              className="nav-link"
                              data-key="t-collections"
                            >
                              Collections
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-creators.html"
                              className="nav-link"
                              data-key="t-creators"
                            >
                              Creators
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-ranking.html"
                              className="nav-link"
                              data-key="t-ranking"
                            >
                              Ranking
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-wallet.html"
                              className="nav-link"
                              data-key="t-wallet-connect"
                            >
                              Wallet Connect
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-nft-create.html"
                              className="nav-link"
                              data-key="t-create-nft"
                            >
                              Create NFT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="apps-file-manager.html" className="nav-link">
                        {" "}
                        <span data-key="t-file-manager">File Manager</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="apps-todo.html" className="nav-link">
                        {" "}
                        <span data-key="t-to-do">To Do</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarjobs"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarjobs"
                      >
                        {" "}
                        <span data-key="t-jobs">Jobs</span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarjobs">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="apps-job-statistics.html"
                              className="nav-link"
                              data-key="t-candidate-list"
                            >
                              {" "}
                              Statistics{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarJoblists"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarJoblists"
                              data-key="t-job-lists"
                            >
                              Job Lists
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebarJoblists"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="apps-job-lists.html"
                                    className="nav-link"
                                    data-key="t-list"
                                  >
                                    List
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="apps-job-grid-lists.html"
                                    className="nav-link"
                                    data-key="t-grid"
                                  >
                                    Grid
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="apps-job-details.html"
                                    className="nav-link"
                                    data-key="t-overview"
                                  >
                                    Overview
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarCandidatelists"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarCandidatelists"
                              data-key="t-candidate-lists"
                            >
                              Candidate Lists
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebarCandidatelists"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="apps-job-candidate-lists.html"
                                    className="nav-link"
                                    data-key="t-list-view"
                                  >
                                    List View
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="apps-job-candidate-grid.html"
                                    className="nav-link"
                                    data-key="t-grid-view"
                                  >
                                    Grid View
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-job-application.html"
                              className="nav-link"
                              data-key="t-application"
                            >
                              Application
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-job-new.html"
                              className="nav-link"
                              data-key="t-new-job"
                            >
                              New Job
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-job-companies-lists.html"
                              className="nav-link"
                              data-key="t-companies-list"
                            >
                              Companies List
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="apps-job-categories.html"
                              className="nav-link"
                              data-key="t-job-categories"
                            >
                              Job Categories
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="apps-api-key.html" className="nav-link">
                        {" "}
                        <span data-key="t-api-key">API Key</span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarLayouts"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLayouts"
                >
                  <i className="ri-layout-3-line"></i>{" "}
                  <span data-key="t-layouts">Layouts</span>{" "}
                  <span className="badge badge-pill bg-danger" data-key="t-hot">
                    Hot
                  </span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarLayouts">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="layouts-horizontal.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-horizontal"
                      >
                        Horizontal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="layouts-detached.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-detached"
                      >
                        Detached
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="layouts-two-column.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-two-column"
                      >
                        Two Column
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="layouts-vertical-hovered.html"
                        target="_blank"
                        className="nav-link"
                        data-key="t-hovered"
                      >
                        Hovered
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-title">
                <i className="ri-more-fill"></i>{" "}
                <span data-key="t-pages">Pages</span>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarAuth"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarAuth"
                >
                  <i className="ri-account-circle-line"></i>{" "}
                  <span data-key="t-authentication">Authentication</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarAuth">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="#sidebarSignIn"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignIn"
                        data-key="t-signin"
                      >
                        Sign In
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarSignIn"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-signin-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-signin-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarSignUp"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSignUp"
                        data-key="t-signup"
                      >
                        Sign Up
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarSignUp"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-signup-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-signup-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#sidebarResetPass"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarResetPass"
                        data-key="t-password-reset"
                      >
                        Password Reset
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarResetPass"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-pass-reset-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-pass-reset-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#sidebarchangePass"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarchangePass"
                        data-key="t-password-create"
                      >
                        Password Create
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarchangePass"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-pass-change-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-pass-change-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#sidebarLockScreen"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLockScreen"
                        data-key="t-lock-screen"
                      >
                        Lock Screen
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarLockScreen"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-lockscreen-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-lockscreen-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#sidebarLogout"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLogout"
                        data-key="t-logout"
                      >
                        Logout
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarLogout"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-logout-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-logout-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarSuccessMsg"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarSuccessMsg"
                        data-key="t-success-message"
                      >
                        Success Message
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarSuccessMsg"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-success-msg-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-success-msg-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarTwoStep"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTwoStep"
                        data-key="t-two-step-verification"
                      >
                        Two Step Verification
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarTwoStep"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-twostep-basic.html"
                              className="nav-link"
                              data-key="t-basic"
                            >
                              Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-twostep-cover.html"
                              className="nav-link"
                              data-key="t-cover"
                            >
                              Cover
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarErrors"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarErrors"
                        data-key="t-errors"
                      >
                        Errors
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarErrors"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="auth-404-basic.html"
                              className="nav-link"
                              data-key="t-404-basic"
                            >
                              404 Basic
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-404-cover.html"
                              className="nav-link"
                              data-key="t-404-cover"
                            >
                              404 Cover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-404-alt.html"
                              className="nav-link"
                              data-key="t-404-alt"
                            >
                              404 Alt
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-500.html"
                              className="nav-link"
                              data-key="t-500"
                            >
                              500
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="auth-offline.html"
                              className="nav-link"
                              data-key="t-offline-page"
                            >
                              Offline Page
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarPages"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarPages"
                >
                  <i className="ri-pages-line"></i>{" "}
                  <span data-key="t-pages">Pages</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarPages">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="pages-starter.html"
                        className="nav-link"
                        data-key="t-starter"
                      >
                        Starter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#sidebarProfile"
                        className="nav-link"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarProfile"
                        data-key="t-profile"
                      >
                        Profile
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarProfile"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="pages-profile.html"
                              className="nav-link"
                              data-key="t-simple-page"
                            >
                              Simple Page
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="pages-profile-settings.html"
                              className="nav-link"
                              data-key="t-settings"
                            >
                              Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-team.html"
                        className="nav-link"
                        data-key="t-team"
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-timeline.html"
                        className="nav-link"
                        data-key="t-timeline"
                      >
                        Timeline
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-faqs.html"
                        className="nav-link"
                        data-key="t-faqs"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-pricing.html"
                        className="nav-link"
                        data-key="t-pricing"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-gallery.html"
                        className="nav-link"
                        data-key="t-gallery"
                      >
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-maintenance.html"
                        className="nav-link"
                        data-key="t-maintenance"
                      >
                        Maintenance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-coming-soon.html"
                        className="nav-link"
                        data-key="t-coming-soon"
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-sitemap.html"
                        className="nav-link"
                        data-key="t-sitemap"
                      >
                        Sitemap
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages-search-results.html"
                        className="nav-link"
                        data-key="t-search-results"
                      >
                        Search Results
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages-privacy-policy.html" className="nav-link">
                        <span data-key="t-privacy-policy">Privacy Policy</span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages-term-conditions.html" className="nav-link">
                        <span data-key="t-term-conditions">
                          Term &amp; Conditions
                        </span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarLanding"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarLanding"
                >
                  <i className="ri-rocket-line"></i>{" "}
                  <span data-key="t-landing">Landing</span>
                </a>
                <div className="collapse menu-dropdown" id="sidebarLanding">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        href="landing.html"
                        className="nav-link"
                        data-key="t-one-page"
                      >
                        One Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="nft-landing.html"
                        className="nav-link"
                        data-key="t-nft-landing"
                      >
                        NFT Landing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="job-landing.html" className="nav-link">
                        <span data-key="t-job">Job</span>{" "}
                        <span
                          className="badge badge-pill bg-success"
                          data-key="t-new"
                        >
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-title">
                <i className="ri-more-fill"></i>{" "}
                <span data-key="t-components">Components</span>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link menu-link"
                  href="#sidebarUI"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarUI"
                >
                  <i className="ri-pencil-ruler-2-line"></i>{" "}
                  <span data-key="t-base-ui">Base UI</span>
                </a>
                <div
                  className="collapse menu-dropdown mega-dropdown-menu"
                  id="sidebarUI"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-alerts.html"
                            className="nav-link"
                            data-key="t-alerts"
                          >
                            Alerts
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-badges.html"
                            className="nav-link"
                            data-key="t-badges"
                          >
                            Badges
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-buttons.html"
                            className="nav-link"
                            data-key="t-buttons"
                          >
                            Buttons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-colors.html"
                            className="nav-link"
                            data-key="t-colors"
                          >
                            Colors
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-cards.html"
                            className="nav-link"
                            data-key="t-cards"
                          >
                            Cards
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-carousel.html"
                            className="nav-link"
                            data-key="t-carousel"
                          >
                            Carousel
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-dropdowns.html"
                            className="nav-link"
                            data-key="t-dropdowns"
                          >
                            Dropdowns
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-grid.html"
                            className="nav-link"
                            data-key="t-grid"
                          >
                            Grid
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-images.html"
                            className="nav-link"
                            data-key="t-images"
                          >
                            Images
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-tabs.html"
                            className="nav-link"
                            data-key="t-tabs"
                          >
                            Tabs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-accordions.html"
                            className="nav-link"
                            data-key="t-accordion-collapse"
                          >
                            Accordion &amp; Collapse
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-modals.html"
                            className="nav-link"
                            data-key="t-modals"
                          >
                            Modals
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-offcanvas.html"
                            className="nav-link"
                            data-key="t-offcanvas"
                          >
                            Offcanvas
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-placeholders.html"
                            className="nav-link"
                            data-key="t-placeholders"
                          >
                            Placeholders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-progress.html"
                            className="nav-link"
                            data-key="t-progress"
                          >
                            Progress
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-notifications.html"
                            className="nav-link"
                            data-key="t-notifications"
                          >
                            Notifications
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            href="ui-media.html"
                            className="nav-link"
                            data-key="t-media-object"
                          >
                            Media object
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-embed-video.html"
                            className="nav-link"
                            data-key="t-embed-video"
                          >
                            Embed Video
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-typography.html"
                            className="nav-link"
                            data-key="t-typography"
                          >
                            Typography
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-lists.html"
                            className="nav-link"
                            data-key="t-lists"
                          >
                            Lists
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-general.html"
                            className="nav-link"
                            data-key="t-general"
                          >
                            General
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-ribbons.html"
                            className="nav-link"
                            data-key="t-ribbons"
                          >
                            Ribbons
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="ui-utilities.html"
                            className="nav-link"
                            data-key="t-utilities"
                          >
                            Utilities
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="#sidebarMore"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebarMore"
                >
                  {" "}
                  <i className="ri-briefcase-2-line"></i> More{" "}
                </a>{" "}
                <div className="collapse menu-dropdown" id="sidebarMore">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarAdvanceUI"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarAdvanceUI"
                      >
                        <i className="ri-stack-line"></i>{" "}
                        <span data-key="t-advance-ui">Advance UI</span>
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarAdvanceUI"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="advance-ui-sweetalerts.html"
                              className="nav-link"
                              data-key="t-sweet-alerts"
                            >
                              Sweet Alerts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-nestable.html"
                              className="nav-link"
                              data-key="t-nestable-list"
                            >
                              Nestable List
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-scrollbar.html"
                              className="nav-link"
                              data-key="t-scrollbar"
                            >
                              Scrollbar
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-animation.html"
                              className="nav-link"
                              data-key="t-animation"
                            >
                              Animation
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-tour.html"
                              className="nav-link"
                              data-key="t-tour"
                            >
                              Tour
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-swiper.html"
                              className="nav-link"
                              data-key="t-swiper-slider"
                            >
                              Swiper Slider
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-ratings.html"
                              className="nav-link"
                              data-key="t-ratings"
                            >
                              Ratings
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-highlight.html"
                              className="nav-link"
                              data-key="t-highlight"
                            >
                              Highlight
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="advance-ui-scrollspy.html"
                              className="nav-link"
                              data-key="t-scrollSpy"
                            >
                              ScrollSpy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link menu-link" href="widgets.html">
                        <i className="ri-honour-line"></i>{" "}
                        <span data-key="t-widgets">Widgets</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarForms"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarForms"
                      >
                        <i className="ri-file-list-3-line"></i>{" "}
                        <span data-key="t-forms">Forms</span>
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarForms">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="forms-elements.html"
                              className="nav-link"
                              data-key="t-basic-elements"
                            >
                              Basic Elements
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-select.html"
                              className="nav-link"
                              data-key="t-form-select"
                            >
                              Form Select
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-checkboxs-radios.html"
                              className="nav-link"
                              data-key="t-checkboxs-radios"
                            >
                              Checkboxs &amp; Radios
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-pickers.html"
                              className="nav-link"
                              data-key="t-pickers"
                            >
                              Pickers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-masks.html"
                              className="nav-link"
                              data-key="t-input-masks"
                            >
                              Input Masks
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-advanced.html"
                              className="nav-link"
                              data-key="t-advanced"
                            >
                              Advanced
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-range-sliders.html"
                              className="nav-link"
                              data-key="t-range-slider"
                            >
                              Range Slider
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-validation.html"
                              className="nav-link"
                              data-key="t-validation"
                            >
                              Validation
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-wizard.html"
                              className="nav-link"
                              data-key="t-wizard"
                            >
                              Wizard
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-editors.html"
                              className="nav-link"
                              data-key="t-editors"
                            >
                              Editors
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-file-uploads.html"
                              className="nav-link"
                              data-key="t-file-uploads"
                            >
                              File Uploads
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-layouts.html"
                              className="nav-link"
                              data-key="t-form-layouts"
                            >
                              Form Layouts
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="forms-select2.html"
                              className="nav-link"
                              data-key="t-select2"
                            >
                              Select2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarTables"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarTables"
                      >
                        <i className="ri-layout-grid-line"></i>{" "}
                        <span data-key="t-tables">Tables</span>
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarTables"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="tables-basic.html"
                              className="nav-link"
                              data-key="t-basic-tables"
                            >
                              Basic Tables
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="tables-gridjs.html"
                              className="nav-link"
                              data-key="t-grid-js"
                            >
                              Grid Js
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="tables-listjs.html"
                              className="nav-link"
                              data-key="t-list-js"
                            >
                              List Js
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="tables-datatables.html"
                              className="nav-link"
                              data-key="t-datatables"
                            >
                              Datatables
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarCharts"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarCharts"
                      >
                        <i className="ri-pie-chart-line"></i>{" "}
                        <span data-key="t-charts">Charts</span>
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarCharts"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="#sidebarApexcharts"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarApexcharts"
                              data-key="t-apexcharts"
                            >
                              Apexcharts
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebarApexcharts"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-line.html"
                                    className="nav-link"
                                    data-key="t-line"
                                  >
                                    Line
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-area.html"
                                    className="nav-link"
                                    data-key="t-area"
                                  >
                                    Area
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-column.html"
                                    className="nav-link"
                                    data-key="t-column"
                                  >
                                    Column
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-bar.html"
                                    className="nav-link"
                                    data-key="t-bar"
                                  >
                                    Bar
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-mixed.html"
                                    className="nav-link"
                                    data-key="t-mixed"
                                  >
                                    Mixed
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-timeline.html"
                                    className="nav-link"
                                    data-key="t-timeline"
                                  >
                                    Timeline
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-candlestick.html"
                                    className="nav-link"
                                    data-key="t-candlstick"
                                  >
                                    Candlstick
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-boxplot.html"
                                    className="nav-link"
                                    data-key="t-boxplot"
                                  >
                                    Boxplot
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-bubble.html"
                                    className="nav-link"
                                    data-key="t-bubble"
                                  >
                                    Bubble
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-scatter.html"
                                    className="nav-link"
                                    data-key="t-scatter"
                                  >
                                    Scatter
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-heatmap.html"
                                    className="nav-link"
                                    data-key="t-heatmap"
                                  >
                                    Heatmap
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-treemap.html"
                                    className="nav-link"
                                    data-key="t-treemap"
                                  >
                                    Treemap
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-pie.html"
                                    className="nav-link"
                                    data-key="t-pie"
                                  >
                                    Pie
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-radialbar.html"
                                    className="nav-link"
                                    data-key="t-radialbar"
                                  >
                                    Radialbar
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-radar.html"
                                    className="nav-link"
                                    data-key="t-radar"
                                  >
                                    Radar
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="charts-apex-polar.html"
                                    className="nav-link"
                                    data-key="t-polar-area"
                                  >
                                    Polar Area
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="charts-chartjs.html"
                              className="nav-link"
                              data-key="t-chartjs"
                            >
                              Chartjs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="charts-echarts.html"
                              className="nav-link"
                              data-key="t-echarts"
                            >
                              Echarts
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarIcons"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarIcons"
                      >
                        <i className="ri-compasses-2-line"></i>{" "}
                        <span data-key="t-icons">Icons</span>
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarIcons">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="icons-remix.html"
                              className="nav-link"
                              data-key="t-remix"
                            >
                              Remix
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="icons-boxicons.html"
                              className="nav-link"
                              data-key="t-boxicons"
                            >
                              Boxicons
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="icons-materialdesign.html"
                              className="nav-link"
                              data-key="t-material-design"
                            >
                              Material Design
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="icons-lineawesome.html"
                              className="nav-link"
                              data-key="t-line-awesome"
                            >
                              Line Awesome
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="icons-feather.html"
                              className="nav-link"
                              data-key="t-feather"
                            >
                              Feather
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="icons-crypto.html" className="nav-link">
                              {" "}
                              <span data-key="t-crypto-svg">Crypto SVG</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarMaps"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarMaps"
                      >
                        <i className="ri-map-pin-line"></i>{" "}
                        <span data-key="t-maps">Maps</span>
                      </a>
                      <div className="collapse menu-dropdown" id="sidebarMaps">
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="maps-google.html"
                              className="nav-link"
                              data-key="t-google"
                            >
                              Google
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="maps-vector.html"
                              className="nav-link"
                              data-key="t-vector"
                            >
                              Vector
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="maps-leaflet.html"
                              className="nav-link"
                              data-key="t-leaflet"
                            >
                              Leaflet
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link menu-link"
                        href="#sidebarMultilevel"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarMultilevel"
                      >
                        <i className="ri-share-line"></i>{" "}
                        <span data-key="t-multi-level">Multi Level</span>
                      </a>
                      <div
                        className="collapse menu-dropdown"
                        id="sidebarMultilevel"
                      >
                        <ul className="nav nav-sm flex-column">
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link"
                              data-key="t-level-1.1"
                            >
                              Level 1.1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarAccount"
                              className="nav-link"
                              data-bs-toggle="collapse"
                              role="button"
                              aria-expanded="false"
                              aria-controls="sidebarAccount"
                              data-key="t-level-1.2"
                            >
                              Level 1.2
                            </a>
                            <div
                              className="collapse menu-dropdown"
                              id="sidebarAccount"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className="nav-item">
                                  <a
                                    href="#"
                                    className="nav-link"
                                    data-key="t-level-2.1"
                                  >
                                    Level 2.1
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    href="#sidebarCrm"
                                    className="nav-link"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="sidebarCrm"
                                    data-key="t-level-2.2"
                                  >
                                    Level 2.2
                                  </a>
                                  <div
                                    className="collapse menu-dropdown"
                                    id="sidebarCrm"
                                  >
                                    <ul className="nav nav-sm flex-column">
                                      <li className="nav-item">
                                        <a
                                          href="#"
                                          className="nav-link"
                                          data-key="t-level-3.1"
                                        >
                                          Level 3.1
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a
                                          href="#"
                                          className="nav-link"
                                          data-key="t-level-3.2"
                                        >
                                          Level 3.2
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-background"></div>
      </div>
    </>
  );
}

export default Sidebar;
