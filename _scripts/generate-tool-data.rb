# Preprocessing script
# Run before `jekyll build` to go through _config.yml and use octokit to fill out metadata
#
# Example:
#  - repo: trvrb/coaltrace
#  - owner: trvrb
#  - title: coaltrace
#  - description: Simulating genealogies using charged particles
#  - url: /projects/coaltrace/
#  - date: 2013-10-19 04:12:17 UTC
#  - contributors:
#      - login: trvrb
#      - avatar: https://2.gravatar.com/avatar/ab7fe2db559c7924316c4391ba00b3f0
#      - url: https://github.com/trvrb
#  - commits:
#      - date: 2013-10-19T04:12:06Z
#      - message: Update readme.
#      - url: https://github.com/trvrb/coaltrace/commit/ebb95806f989d8fd6ecbf6aa8308647298dd21ad

require 'octokit'
require 'yaml'

module Tools

	def self.generate_data(config_file, tool_category)

		tool_data = {}

		config = YAML.load_file(config_file)
		tools_array = config[tool_category]

		puts "Generating tools"
		# create octokit client
		client = Octokit::Client.new(:netrc => true, :access_token => ENV['GITHUB_TOKEN'])

		tool_data = Array.new
		if tools_array.length > 0
			tools_array.each do |repo|

				puts "\tGenerating #{repo}"

				# load repo metadata
				octokit_repo = client.repository(repo)
				tool_title = octokit_repo.name
				tool_owner = octokit_repo.owner.login
				tool_description = octokit_repo.description
				tool_url = "/tools/#{tool_title}/"
				tool_date = octokit_repo.updated_at

                                # lood repo topics
                                octokit_topics = client.topics(repo)
                                p(octokit_topics)
                                tool_topics = Array.new
                                for i in 0 ... octokit_topics.names.size
                                  topic = octokit_topics.names[i]
                                  tool_topics = tool_topics.push(topic)
                                end
                                p(tool_topics)

				# load contributor metadata
				octokit_contributors = client.contributors(repo)
				tool_contributors = Array.new
				for i in 0 ... [octokit_contributors.size, 10].min
					contributor = octokit_contributors[i]
					contributor_login = contributor.login
					contributor_avatar = contributor.rels[:avatar].href + "&s=50"
					contributor_url = contributor.rels[:html].href
					tool_contributors = tool_contributors.push(
						"login" => contributor_login,
						"avatar" => contributor_avatar,
						"url" => contributor_url
					)
				end

				# load commit metadata
				octokit_commits = client.commits(repo)
				tool_commits = Array.new
				counter = 0
				for i in 0 ... octokit_commits.size
					commit = octokit_commits[i]
					commit_date = commit.commit.author.date
					commit_message = commit.commit.message
					commit_url = commit.rels[:html].href

					if commit.author != nil
						commit_author_login = commit.author.login
						if commit.author.rels[:html] != nil
							commit_author_url = commit.author.rels[:html].href
						else
							commit_author_url = ""
						end
					else
						commit_author_login = ""
						commit_author_url = ""
					end

					tool_commits = tool_commits.push(
						"date" => commit_date,
						"message" => commit_message,
						"url" => commit_url,
						"author_login" => commit_author_login,
						"author_url" => commit_author_url
					)
					counter += 1
					if counter == 5
						break
					end

				end

				# assemble metadata
				tool_data = tool_data.push(
					"repo" => repo,
					"title" => tool_title,
					"owner" => tool_owner,
					"description" => tool_description,
					"url" => tool_url,
                                        "topics" => tool_topics,
					"contributors" => tool_contributors,
					"commits" => tool_commits
				)

				# sort by date
				#tool_data.sort! { |x, y| y["commits"].first["date"] <=> x["commits"].first["date"] }
                                tool_data.sort! { |x, y| x["title"] <=> y["title"] }

			end
		end

		return tool_data

	end

	def self.write_data(tool_data, data_file)

		puts "Writing tool data"
		File.write(data_file, tool_data.to_yaml)

	end

end

tool_data = Tools.generate_data("_config.yml", "current_tools")
Tools.write_data(tool_data, "_data/current_tools.yml")

tool_data = Tools.generate_data("_config.yml", "retired_tools")
Tools.write_data(tool_data, "_data/retired_tools.yml")
