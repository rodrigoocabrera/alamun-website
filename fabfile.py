from fabric.api import (local, run, env, cd, lcd, settings, sudo, prefix)


env.hosts = ['45.55.22.202']
env.user = 'rails'

def deploy():
    with cd('/home/rails/alamun-website/'):
        run('git pull')
        run('npm install')
        run('bower install')
        run('gulp')
