import React from 'react'
import { promises as fs } from 'fs'
import Project from '@/app/types/project'
import Link from 'next/link'

const ProjectDetail = async ({ params }: { params: { slug: string } }) => {

  const projects: Project[] = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf8').then<Project[]>(res => JSON.parse(res))
  const data: Project = projects.filter((x) => x.slug == params.slug)[0]
  
  return (
    <section className="px-4 py-16 md:px-32 md:h-5/6 md:w-10/12 flex flex-col justify-center">
        <div>
            <div>
                <h3 className="text-2xl font-semibold">Project Details</h3>

                <div className="mt-6 md:mt-9">
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Name</p>
                            <p className="text-lg font-semibold">{ data.name }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Associated With</p>
                            <p className="text-lg font-semibold">{ data.associatedWith }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Role</p>
                            <p className="text-lg font-semibold">{ data.role }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Duration</p>
                            <p className="text-lg font-semibold">{ data.duration }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Release Date</p>
                            <p className="text-lg font-semibold">{ data.release }</p>
                        </div>
                        <div className="mt-2 md:mt-4 w-full h-[1px] bg-black opacity-15"></div>
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex flex-col md:flex-row">
                            <p className="w-[256px] text-lg font-semibold opacity-50">Links</p>
                            <p className="text-lg font-semibold"> 
                                { data.links.appStore != "" && (<Link target='_blank' className='text-blue-400' href={ data.links.appStore } >App Store</Link>) }
                                { data.links.testflight != "" && (<Link target='_blank' className='text-blue-400' href={ data.links.testflight } > | Testflight</Link>) }
                                { data.links.playStore != "" && (<Link target='_blank' className='text-blue-400' href={ data.links.playStore } > | Play Store</Link>) }
                                { data.links.github != "" && (<Link target='_blank' className='text-blue-400' href={ data.links.github } > | GitHub</Link>) }
                                { (data.links.appStore == "" || data.links.testflight == "" || data.links.playStore == "" || data.links.github == "") && (<p>-</p>) }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 md:mt-16">
                <h3 className="text-2xl font-semibold">Summary</h3>

                <div className="mt-6 md:mt-9 pb-9">
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, libero, quibusdam ab placeat aut delectus facilis non ipsam nesciunt error quasi possimus quod? Id debitis nam cum maxime quas eveniet!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectDetail